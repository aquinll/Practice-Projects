using MarveEvelatorSystems.constants;
using MarveEvelatorSystems.system;
using System;
using System.Collections.Generic;
using System.Threading;

namespace MarveEvelatorSystems.objects
{
    class Elevator
    {
        private readonly Int32 elevatorId;
        private readonly object directionLock;
        private readonly object floorLock;
        private readonly object passengerLock;
        private readonly object stateLock;
        private Int32 currentFloor;
        private List<User> passengers;
        private NumericalConstants.ElevatorState state;
        private NumericalConstants.ElevatorDirection direction;
        public Elevator(Int32 value)
        {
            elevatorId = value;
            directionLock = new object();
            floorLock = new object();
            stateLock = new object();
            passengerLock = new object();
            passengers = new List<User>();
            currentFloor = NumericalConstants.FIRST_FLOOR;
            state = NumericalConstants.ElevatorState.ELEVATOR_STOP;
            direction = NumericalConstants.ElevatorDirection.ELEVATOR_HALT;
        }
        public Int32 GetId()
        {
            return elevatorId;
        }
        public void SetPassenger(User data)
        {
            lock (passengerLock)
            {
                passengers.Add(data);
            }
        }
        public bool ElevatorEmpty()
        {
            lock (passengerLock)
            {
                return (passengers.Count == NumericalConstants.NO_PASSENGERS);
            }
        }
        public bool ElevatorFull()
        {
            lock (passengerLock)
            {
                return (passengers.Count == NumericalConstants.MAXIMUM_ELEVATOR_PASSENGER);
            }
        }
        public Int32 GetCurrentFloor()
        {
            lock (floorLock)
            {
                return currentFloor;
            }
        }
        public void SetState(NumericalConstants.ElevatorState value)
        {
            lock (stateLock)
            {
                state = value;
            }
        }
        public NumericalConstants.ElevatorState GetState()
        {
            lock (stateLock)
            {
                return state;
            }
        }
        public void SetDirection(NumericalConstants.ElevatorDirection value)
        {
            lock (directionLock)
            {
                direction = value;
            }
        }
        public NumericalConstants.ElevatorDirection GetDirection()
        {
            lock (directionLock)
            {
                return direction;
            }
        }
        private void MoveElevator()
        {
            while (GetState() == NumericalConstants.ElevatorState.ELEVATOR_STOP)
            {
                if (BuildingSystem.CheckAbort)
                {
                    break;
                }
                Thread.Sleep(NumericalConstants.ELEVATOR_WAITING_TIME);
            }
            NumericalConstants.ElevatorDirection movement = GetDirection();
            lock (floorLock)
            {
                if ((movement == NumericalConstants.ElevatorDirection.ELEVATOR_UP) &&
                    (currentFloor == NumericalConstants.FIRST_FLOOR || currentFloor < SystemParameters.FloorCount))
                {
                    ++currentFloor;
                }
                else if ((movement == NumericalConstants.ElevatorDirection.ELEVATOR_DOWN) &&
                         (currentFloor == SystemParameters.FloorCount || currentFloor > NumericalConstants.FIRST_FLOOR))
                {
                    --currentFloor;
                }
            }
        }
        private void DispatchPassengers()
        {
            string outgoing = "E(" + elevatorId.ToString() + ") - OUT[ ";
            Int32 floorStop = GetCurrentFloor();
            lock (passengerLock)
            {
                for (Int32 count = 0; count < passengers.Count; ++count)
                {
                    if (BuildingSystem.CheckAbort)
                    {
                        break;
                    }
                    User thisUser = passengers[count];
                    if (floorStop == thisUser.DestinationFloor)
                    {
                        outgoing += (thisUser.ToString() + " ");
                        passengers.RemoveAt(count);
                    }
                }
            }
            outgoing += "]";
            MainApp.appLogger.WriteLog(outgoing);
        }
        public void Run()
        {
            while (!SystemParameters.SystemStart)
            {
                Thread.Sleep(NumericalConstants.SYSTEM_START_DELAY);
            }
            while (!BuildingSystem.CheckAbort)
            {
                if (!ElevatorEmpty())
                {
                    MoveElevator();
                    Thread.Sleep(SystemParameters.ElevatorSpeed);
                    DispatchPassengers();
                }
                else
                {
                    SetState(NumericalConstants.ElevatorState.ELEVATOR_STOP);
                    SetDirection(NumericalConstants.ElevatorDirection.ELEVATOR_HALT);
                }
            }
        }
    }
}
