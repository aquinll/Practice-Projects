using MarveEvelatorSystems.objects;
using MarveEvelatorSystems.constants;
using System;
using System.Collections;

namespace MarveEvelatorSystems.system
{
    class ArgumentParser
    {
        public bool ParseComplete { get; }
        private readonly Int32 floorCount;
        private readonly Int32 elevatorCount;
        private readonly Int32 usersCount;

        public ArgumentParser(ArrayList args)
        {
            int fileOptionIndex = args.IndexOf(StringConstants.FILE_OPTION);
            if (fileOptionIndex != NumericalConstants.NOT_FOUND)
            {
                Logger.WriteToFile = true;
                args.RemoveAt(fileOptionIndex);
            }
            switch (args.Count)
            {
                case 3:
                    ParseComplete = Int32.TryParse(args[0].ToString(), out floorCount);
                    ParseComplete &= Int32.TryParse(args[1].ToString(), out elevatorCount);
                    ParseComplete &= Int32.TryParse(args[2].ToString(), out usersCount);
                    break;
                case 2:
                    usersCount = NumericalConstants.DEFAULT_USERS_COUNT;
                    ParseComplete = Int32.TryParse(args[0].ToString(), out floorCount);
                    ParseComplete &= Int32.TryParse(args[1].ToString(), out elevatorCount);
                    break;
                case 1:
                    elevatorCount = NumericalConstants.DEFAULT_ELEVATOR_COUNT;
                    usersCount = NumericalConstants.DEFAULT_USERS_COUNT;
                    ParseComplete = Int32.TryParse(args[0].ToString(), out floorCount);
                    if (floorCount < NumericalConstants.DEFAULT_FLOOR_COUNT)
                    {
                        floorCount = NumericalConstants.DEFAULT_FLOOR_COUNT;
                    }
                    break;
                default:
                    floorCount = NumericalConstants.DEFAULT_FLOOR_COUNT;
                    elevatorCount = NumericalConstants.DEFAULT_ELEVATOR_COUNT;
                    usersCount = NumericalConstants.DEFAULT_USERS_COUNT;
                    ParseComplete = true;
                    break;
            }
            if (ParseComplete)
            {
                if (floorCount < NumericalConstants.DEFAULT_FLOOR_COUNT)
                {
                    floorCount = NumericalConstants.DEFAULT_FLOOR_COUNT;
                }
                if (elevatorCount < NumericalConstants.DEFAULT_ELEVATOR_COUNT)
                {
                    elevatorCount = NumericalConstants.DEFAULT_ELEVATOR_COUNT;
                }
                if (usersCount < NumericalConstants.DEFAULT_USERS_COUNT)
                {
                    usersCount = NumericalConstants.DEFAULT_USERS_COUNT;
                }
            }
        }
        protected Int32 FloorCount
        {
            get
            {
                return floorCount;
            }
        }
        protected Int32 ElevatorCount
        {
            get
            {
                return elevatorCount;
            }
        }
        protected Int32 UsersCount
        {
            get
            {
                return usersCount;
            }
        }
        protected void Help()
        {
            Console.WriteLine("Arguments: [FLOOR_COUNT] [ELEVATOR_COUNT] [USERS_COUNT] [-f]");
            Console.WriteLine("\tFLOOR_COUNT    = number of building floors (default: 3) for the elevator system");
            Console.WriteLine("\tELEVATOR_COUNT = number of elevators (default: 2) for the elevator system");
            Console.WriteLine("\tUSERS_COUNT    = number of persons (default: 2) per floor randomly generated per second");
            Console.WriteLine("\t-f             = write messages to log file switch");
        }

    }
}
