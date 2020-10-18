using MarveEvelatorSystems.objects;
using MarveEvelatorSystems.system;
using System;
using System.Collections;

namespace MarveEvelatorSystems
{
    class MainApp
    {
        public static Logger appLogger;
        static int Main(string[] args)
        {
            ArrayList parameters = new ArrayList(args);
            BuildingSystem app = new BuildingSystem(parameters);
            app.Run();
            return Environment.ExitCode;
        }
    }
}
