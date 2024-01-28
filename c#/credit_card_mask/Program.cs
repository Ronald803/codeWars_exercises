using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace credit_card_mask
{
    internal class Program
    {
        static void Main(string[] args)
        {
            string password;
            string passwordMask="";
            Console.WriteLine("Ingresa tu contraseña: ");
            password = Console.ReadLine();           
            for (int i = 0; i < password.Length; i++)
            {
                if ((password.Length - i) > 4)
                {
                    passwordMask = $"{passwordMask}#";
                }
                else 
                {
                    passwordMask = $"{passwordMask}{password[i]}";
                }
            }
            Console.WriteLine(passwordMask);
        }
    }
}
