using System;
using System.Collections.Generic;
using System.Text;

namespace MarveEvelatorSystems.objects
{
    sealed class SystemParameters
    {
        public static Int32 FloorCount { get; set; }
        public static Int32 ElevatorCount { get; set; }
        public static Int32 UsersCount { get; set; }
        public static Int32 ElevatorSpeed { get; set; }
        public static bool SystemStart { get; set; }
        public static void Print()
        {
            if (MainApp.appLogger != null)
            {
                MainApp.appLogger.WriteLog("** Marve(s) Elevator System Parameters **");
                MainApp.appLogger.WriteLog("-----------------------------------------");
                MainApp.appLogger.WriteLog("Number of Building Floors   : {0,10}", FloorCount);
                MainApp.appLogger.WriteLog("Number of Building Elevators: {0,10}", ElevatorCount);
                MainApp.appLogger.WriteLog("Speed of Building Elevator  : {0,10}", ElevatorSpeed);
                MainApp.appLogger.WriteLog("Number of Random Passengers : {0,10}", UsersCount);
                MainApp.appLogger.WriteLog("");
            }
        }
    }
}
