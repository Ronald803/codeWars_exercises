using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Regex_validate_pin_code
{
    internal class Program
    {
        static void Main(string[] args)
        {
            string pin;
            Console.Write("Ingrese su pin: ");
            pin = Console.ReadLine();
            if (pin.Length == 4 || pin.Length == 6)
            {
                try {
                    int numero = Convert.ToInt32(pin);
                    Console.WriteLine(numero);
                }
                catch 
                {
                    Console.WriteLine("no es numero");
                }
            }
            else 
            {
                Console.WriteLine("false");
            }
        }
    }
}
