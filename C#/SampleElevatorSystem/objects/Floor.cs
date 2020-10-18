using MarveEvelatorSystems.constants;
using System;
using System.Collections.Generic;

namespace MarveEvelatorSystems.objects
{
    class Floor
    {
        public readonly Int32 floorId;
        private readonly Random randomNum;
        private readonly object passengerLock;
        private readonly List<User> passengers;
        public Floor(Int32 floor)
        {
            floorId = floor;
            randomNum = new Random();
            passengerLock = new object();
            passengers = new List<User>();

        }
        public void SetPassengers()
        {
            Int32 numPassengers = randomNum.Next(NumericalConstants.MINIMUM_PASSENGER, SystemParameters.UsersCount);
            for (Int32 count = 0; count < numPassengers; ++count)
            {
                lock (passengerLock)
                {
                    passengers.Add(new User(floorId));
                }
            }
        }
        public User GetPassenger()
        {
            lock (passengerLock)
            {
                if (passengers.Count > 0)
                {
                    User thisUser = passengers[0];
                    passengers.RemoveAt(0);
                    return thisUser;
                }
                else
                {
                    return null;
                }
            }
        }
        public User GetPassenger(NumericalConstants.ElevatorDirection direction)
        {
            foreach (User thisUser in passengers)
            {
                if (((direction == NumericalConstants.ElevatorDirection.ELEVATOR_UP) &&
                     (thisUser.DestinationFloor > thisUser.OriginFloor)) ||
                    ((direction == NumericalConstants.ElevatorDirection.ELEVATOR_UP) &&
                     (thisUser.DestinationFloor > thisUser.OriginFloor)))
                {
                    passengers.Remove(thisUser);
                    return thisUser;
                }
            }
            return null;
        }
        public int GetPassengersCount()
        {
            lock (passengerLock)
            {
                return passengers.Count;
            }
        }
    }
}
