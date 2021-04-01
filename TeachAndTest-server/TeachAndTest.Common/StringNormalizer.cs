using System;
using System.Text.Encodings.Web;
using System.Web;

namespace TeachAndTest.Common
{
    public class StringNormalizer
    {
        public static string Normalize(string value)
        {
            string normalized = value.ToUpper();
            normalized = normalized.Replace(" ", "-");
            normalized = HttpUtility.UrlEncode(normalized);
            return normalized;
        } 
    }
}
