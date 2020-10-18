using MarveEvelatorSystems.constants;
using MarveEvelatorSystems.system;
using System;

namespace MarveEvelatorSystems.objects
{
    class User
    {
        private static double ID = 0;
        private readonly static object idLock = new object();
        private readonly double userId;
        public int OriginFloor { get;  }
        public int DestinationFloor { get; }
        public User(Int32 currentFloor)
        {
            lock (idLock)
            {
                userId = (++ID);
            }
            OriginFloor = currentFloor;
            Random randomGen = new Random();
            do
            {
                if (BuildingSystem.CheckAbort)
                {
                    break;
                }
                DestinationFloor = randomGen.Next(NumericalConstants.FIRST_FLOOR, SystemParameters.FloorCount);
            }
            while (DestinationFloor == OriginFloor);
        }
        public override string ToString()
        {
            return string.Format("U({0})[{1}:{2}]", userId, OriginFloor, DestinationFloor);
        }
        public override bool Equals(object obj)
        {
            return (obj != null) && (ToString() == (obj as User).ToString());
        }
        public override int GetHashCode()
        {
            return Convert.ToInt32(userId);
        }
    }
}
