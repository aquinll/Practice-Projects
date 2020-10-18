using MarveEvelatorSystems.constants;
using MarveEvelatorSystems.objects;
using System;
using System.Collections.Generic;
using System.Threading;

namespace MarveEvelatorSystems.system
{
    class ElevatorScheduler
    {
        private readonly List<Elevator> bldgElevators;
        private readonly List<Thread> elevatorMachines;
        private readonly List<Floor> bldgFloors;
        public ElevatorScheduler(ref List<Floor> data)
        {
            bldgFloors = data;
            bldgElevators = new List<Elevator>();
            elevatorMachines = new List<Thread>();
        }
        public void CreateElevatorSystem()
        {
            MainApp.appLogger.WriteLog("Creating the Building elevator scheduler...");
            for (Int32 count = 0; count < SystemParameters.ElevatorCount; ++count)
            {
                bldgElevators.Add(new Elevator(count+1));
                elevatorMachines.Add(new Thread(bldgElevators[count].Run));
                elevatorMachines[count].Start();
            }
        }
        private void WaitElevatorsClose()
        {
            for (Int32 count = 0; count < SystemParameters.ElevatorCount; ++count)
            {
                elevatorMachines[count].Join();
            }
        }
        private void LoadElevators()
        {
            foreach (Floor story in bldgFloors)
            {
                if (BuildingSystem.CheckAbort)
                {
                    break;
                }
                foreach (Elevator machine in bldgElevators)
                {
                    if (BuildingSystem.CheckAbort)
                    {
                        break;
                    }
                    User passenger = story.GetPassenger();
                    if ((passenger != null) &&
                        (machine.GetState() == NumericalConstants.ElevatorState.ELEVATOR_STOP) &&
                        (passenger.OriginFloor == machine.GetCurrentFloor()) && (!machine.ElevatorFull()))
                    {
                        NumericalConstants.ElevatorDirection temp = (passenger.DestinationFloor > passenger.OriginFloor) ?
                                                                    NumericalConstants.ElevatorDirection.ELEVATOR_UP :
                                                                    NumericalConstants.ElevatorDirection.ELEVATOR_DOWN;

                        machine.SetDirection(temp);
                        string incoming = "E(" + machine.GetId().ToString() + ") - IN[ ";
                        do
                        {
                            incoming += (passenger.ToString() + " ");
                            machine.SetPassenger(passenger);
                            if (BuildingSystem.CheckAbort)
                            {
                                break;
                            }
                            passenger = story.GetPassenger(temp);
                        }
                        while ((passenger != null) && (!machine.ElevatorFull()));
                        incoming += "]";
                        MainApp.appLogger.WriteLog(incoming);
                        machine.SetState(NumericalConstants.ElevatorState.ELEVATOR_MOVING);
                    }
                    if (BuildingSystem.CheckAbort)
                    {
                        break;
                    }
                }
                if (BuildingSystem.CheckAbort)
                {
                    break;
                }
            }
        }
        public void AssignElevators()
        {
            while (!SystemParameters.SystemStart)
            {
                Thread.Sleep(NumericalConstants.SYSTEM_START_DELAY);
            }
            while (!BuildingSystem.CheckAbort)
            {
                Thread.Sleep(NumericalConstants.ONE_SECOND);
                LoadElevators();
            }
            WaitElevatorsClose();
        }
    }
}
