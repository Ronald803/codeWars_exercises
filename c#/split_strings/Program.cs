using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace split_strings
{
    internal class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Ingrese la palabra que quiere separar: ");
            string palabra = Console.ReadLine();
            string palabraCompleta;
            if (palabra.Length % 2 == 1)
            {
                palabraCompleta = palabra + '_';
            }
            else 
            {
                palabraCompleta = palabra;
            }
            string[] letras = new string[(palabraCompleta.Length)/2];
            for (int i = 0; i < palabraCompleta.Length/2; i++) 
            {
                letras[i] = $"{palabraCompleta[2 * i]}{palabraCompleta[2 * i + 1]}" ;
            }
            foreach (string str in letras) 
            {
                Console.WriteLine(str);
            }
        }
    }
}
