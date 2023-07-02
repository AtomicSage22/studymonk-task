import React, {useState} from 'react'
import {Stack, TextField, Select, MenuItem, Button} from "@mui/material"
const citiesInIndia = [
    "Mumbai",
    "Delhi",
    "Bangalore",
    "Hyderabad",
    "Chennai",
    "Kolkata",
    "Jaipur",
    "Ahmedabad",
    "Pune",
    "Surat",
    "Lucknow",
    "Kanpur",
    "Nagpur",
    "Patna",
    "Indore",
    "Thane",
    "Bhopal",
    "Visakhapatnam",
    "Vadodara",
    "Firozabad",
    "Ludhiana",
    "Rajkot",
    "Agra",
    "Siliguri",
    "Nashik",
    "Faridabad",
    "Patiala",
    "Meerut",
    "Kalyan-Dombivali",
    "Vasai-Virar",
    "Varanasi",
    "Srinagar",
    "Dhanbad",
    "Jodhpur",
    "Amritsar",
    "Raipur",
    "Allahabad",
    "Coimbatore",
    "Jabalpur",
    "Gwalior",
    "Vijayawada",
    "Madurai",
    "Guwahati",
    "Chandigarh",
    "Hubli-Dharwad",
    "Amroha",
    "Moradabad",
    "Gurgaon",
    "Aligarh",
    "Solapur",
    "Ranchi",
    "Jalandhar",
    "Tiruchirappalli",
    "Bhubaneswar",
    "Salem",
    "Warangal",
    "Mira-Bhayandar",
    "Thiruvananthapuram",
    "Bhiwandi",
    "Saharanpur",
    "Guntur",
    "Amravati",
    "Bikaner",
    "Noida",
    "Jamshedpur",
    "Bhilai",
    "Cuttack",
    "Firozpur",
    "Kochi",
    "Nellore",
    "Bhavnagar",
    "Dehradun",
    "Durgapur",
    "Asansol",
    "Rourkela",
    "Nanded",
    "Kolhapur",
    "Ajmer",
    "Akola",
    "Gulbarga",
    "Jamnagar",
    "Ujjain",
    "Loni",
    "Siliguri",
    "Jhansi",
    "Ulhasnagar",
    "Jammu",
    "Sangli-Miraj & Kupwad",
    "Mirzapur",
    "Belgaum",
    "Mangalore",
    "Ambattur",
    "Tirunelveli",
    "Malegaon",
    "Gaya",
    "Jalgaon",
    "Udaipur",
    "Maheshtala",
    "Davanagere",
    "Kozhikode",
    "Kurnool",
    "Rajpur Sonarpur",
    "Rajahmundry",
    "Bokaro",
    "South Dumdum",
    "Bellary",
    "Patiala",
    "Gopalpur",
    "Agartala",
    "Bhagalpur",
    "Muzaffarnagar",
    "Bhatpara",
    "Panihati",
    "Latur",
    "Dhule",
    "Rohtak",
    "Korba"
]

const Search = () => {
    const [value, setValue] = useState("Web Developer")
    const [location, setLocation] = useState("Bhopal")
      
  return (
    <form className='w-2/4'>
        <Stack spacing={2}>
            <h2 className='text-3xl font-semibold '>Search:</h2>
            <div className='flex flex-col'>
                <label htmlFor='role'> Role:</label>
                <TextField name='role' id='role' value= {value} onChange={(e) => setValue(e.target.value)}/>
            </div>
            <div className='flex flex-col'>
                <label htmlFor='location'>Location:</label>
                <Select name='location' value={location} onChange={(e) => setLocation(e.target.value)}>
                    {citiesInIndia.map((city)=><MenuItem value = {city}>{city}</MenuItem>)}
                </Select>
            </div>
            <Button color='mainTone' variant='contained'>Search</Button>
        </Stack>
    </form>
  )
}

export default Search
