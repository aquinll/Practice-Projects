using MarveEvelatorSystems.constants;
using System;
using System.IO;

namespace MarveEvelatorSystems.objects
{
    class Logger
    {
        public static bool WriteToFile { get; set; }
        private readonly object fileLock;
        private readonly StreamWriter logFileWriter;
        public Logger()
        {
            fileLock = new object();
            if (WriteToFile)
            {
                try
                {
                    string logFile = Path.Combine(Directory.GetCurrentDirectory(), StringConstants.APP_LOG_FILE);
                    if (File.Exists(logFile))
                    {
                        File.Delete(logFile);
                    }
                    logFileWriter = new StreamWriter(logFile,true);
                }
                catch (Exception)
                {
                    Console.WriteLine($"Failed to open {StringConstants.APP_LOG_FILE}...");
                    WriteToFile = false;
                    Environment.ExitCode = 110;
                }
            }
        }
        public void WriteLog(string text, params Object[] objs)
        {
            lock (fileLock)
            {
                Console.WriteLine(text, objs);
                if (WriteToFile)
                {
                    logFileWriter.WriteLine(text, objs);
                    logFileWriter.Flush();
                }
            }
        }
    }
}
