using System;

namespace TeachAndTest.Common
{
    public class StringNormalizer
    {
        public static string Normalize(string value)
        {
            string normalized = value.ToUpper();
            return normalized;
        } 
    }
}
