namespace MarveEvelatorSystems.constants
{
    sealed class NumericalConstants
    {
        public readonly static int NOT_FOUND = -1;

        public readonly static int NO_PASSENGERS = 0;
        public readonly static int MINIMUM_PASSENGER = 1;
        public readonly static int MAXIMUM_ELEVATOR_PASSENGER = 10;

        public readonly static int FIRST_FLOOR = 1;
        public readonly static int DEFAULT_FLOOR_COUNT = 3;
        public readonly static int DEFAULT_ELEVATOR_COUNT = 1;
        public readonly static int DEFAULT_USERS_COUNT = 2;

        // In units of milliseconds (ms)
        public readonly static int ONE_SECOND = 1000;
        public readonly static int SYSTEM_START_DELAY = 500;
        public readonly static int ELEVATOR_WAITING_TIME = 5;
        public readonly static int MINIMUM_ELEVATOR_SPEED = 15;
        public readonly static float DEFAULT_ELEVATOR_SPEED = 600;

        public enum ElevatorState
        {
            ELEVATOR_STOP = 0,
            ELEVATOR_MOVING
        }
        public enum ElevatorDirection
        {
            ELEVATOR_UP = 0,
            ELEVATOR_DOWN,
            ELEVATOR_HALT
        }
    }
}
