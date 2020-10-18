using MarveEvelatorSystems.constants;
using MarveEvelatorSystems.objects;
using System;
using System.Collections;
using System.Collections.Generic;
using System.Threading;

namespace MarveEvelatorSystems.system
{
    class BuildingSystem : ArgumentParser
    {
        private static bool ABORT;
        private List<Floor> bldgFloors;
        private Thread floorSystemThread;
        private FloorSystem bldgFloorSystem;
        private Thread schedulerMachine;
        private ElevatorScheduler bldgScheduler;
        private readonly static object abortLock = new object();
        public BuildingSystem(ArrayList args) : base(args)
        {
            ABORT = false;
            if (!ParseComplete)
            {
                Environment.ExitCode = 160;
                Console.WriteLine("Building system is not initialized properly!");
                Console.WriteLine("Kindly check your command-line arguments.");
                Help();
            }
            else
            {
                bldgFloors = new List<Floor>();
            }
        }
        private void Init()
        {
            Console.Clear();
            MainApp.appLogger = new Logger();
            Console.CancelKeyPress += new ConsoleCancelEventHandler(SetAbort);

            SystemParameters.FloorCount = FloorCount;
            SystemParameters.ElevatorCount = ElevatorCount;
            SystemParameters.UsersCount = UsersCount;

            float elevators = ElevatorCount;
            float floors = FloorCount;
            SystemParameters.ElevatorSpeed = Math.Max(NumericalConstants.MINIMUM_ELEVATOR_SPEED,
                                                      Convert.ToInt32(NumericalConstants.DEFAULT_ELEVATOR_SPEED * (elevators / floors)));
            SystemParameters.Print();
        }
        private void SystemStart()
        {
            bldgFloorSystem = new FloorSystem(ref bldgFloors);
            bldgFloorSystem.CreateFloorSystem();

            floorSystemThread = new Thread(bldgFloorSystem.GeneratePassengers);
            floorSystemThread.Start();

            bldgScheduler = new ElevatorScheduler(ref bldgFloors);
            bldgScheduler.CreateElevatorSystem();

            schedulerMachine = new Thread(bldgScheduler.AssignElevators);
            schedulerMachine.Start();

            MainApp.appLogger.WriteLog("Press any key to continue...");
            Console.Read();
            Console.Clear();
            SystemParameters.SystemStart = true;
        }
        private void SystemClose()
        {
            floorSystemThread.Join();
            schedulerMachine.Join();
        }
        public void Run()
        {
            if (ParseComplete)
            {
                Init();
                SystemStart();
                while (!ABORT)
                {
                    Thread.Sleep(NumericalConstants.ONE_SECOND);
                }
                SystemClose();
            }
        }
        protected static void SetAbort(object sender, ConsoleCancelEventArgs args)
        {
            lock (abortLock)
            {
                ABORT = true;
                args.Cancel = true;
            }
            MainApp.appLogger.WriteLog("System Abort detected...");
        }
        public static bool CheckAbort
        {
            get
            {
                lock(abortLock)
                {
                    return ABORT;
                }
            }
        }
    }
}
