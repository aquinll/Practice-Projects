using MarveEvelatorSystems.objects;
using MarveEvelatorSystems.constants;
using System;
using System.Threading;
using System.Collections.Generic;

namespace MarveEvelatorSystems.system
{
    class FloorSystem
    {
        public readonly List<Floor> bldgFloors;
        public FloorSystem(ref List<Floor> data)
        {
            bldgFloors = data;
        }
        public void CreateFloorSystem()
        {
            MainApp.appLogger.WriteLog("Creating the Building floor passenger generator system...");
            for (Int32 count = NumericalConstants.FIRST_FLOOR; count <= SystemParameters.FloorCount; ++count)
            {
                bldgFloors.Add(new Floor(count));
            }
        }
        public void GeneratePassengers()
        {
            while (!SystemParameters.SystemStart)
            {
                Thread.Sleep(NumericalConstants.SYSTEM_START_DELAY);
            }
            while (!BuildingSystem.CheckAbort)
            {
                Thread.Sleep(NumericalConstants.ONE_SECOND);
                for (Int32 count = 0; count < bldgFloors.Count; ++count)
                {
                    if (BuildingSystem.CheckAbort)
                    {
                        break;
                    }
                    bldgFloors[count].SetPassengers();
                }
            }
        }
    }
}
