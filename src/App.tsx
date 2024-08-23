import { useEffect, useState } from 'react'

import heart from '/heart.svg'

import './App.css'
import { Button } from './components/ui/button';
import { ThemeProvider } from './components/theme-provider';
import { ModeToggle } from './components/mode-toggle';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from './components/ui/card';
import { Label } from './components/ui/label';
import { Input } from './components/ui/input';
import { CircleAlert, ExternalLink, Heart, Send } from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"



function App() {
  const [countries, setCountries] = useState([]);
  const [number, setNumber] = useState('');
  const [countryCode, setCountryCode] = useState(91);
  const [flagUrl, setFlagUrl] = useState(
    "https://upload.wikimedia.org/wikipedia/en/4/41/Flag_of_India.svg"
  );

  useEffect(() => {
    const getCategory = async () => {
      const tasksFromServer = await fetchCountries();
      setCountries(tasksFromServer);
    };
    getCategory();
  }, []);

  const fetchCountries = async () => {
    const res = await fetch(`https://restcountries.com/v2/all`);
    const data = await res.json();
    return data;
  };

  const onNumberType = (e: any) => {
    let num = e.target.value;
    num = num.replace(/\s/g, '')
    num = num.replace(`+${countryCode}`, '')
    setNumber(num);
  }

  const changeFlag = (e: string) => {
    var country: any = countries.filter((c: any) => c.alpha3Code.includes(e));
    setCountryCode(parseInt(e));
    setFlagUrl(country[0].flag);
  };

  const openWhatsapp = () => {
    var whatsappUrl = `https://api.whatsapp.com/send?phone=${countryCode}${number}`;
    number.length < 7
      ? alert("Invalid phone Number")
      : window.open(whatsappUrl, "_blank");
  };

  return (
    <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">

      <div className="App flex flex-col min-h-screen justify-center items-center">
        <div className="w-full max-w-md flex justify-end items-end">
          <ModeToggle />
        </div>
        <Alert className='w-full max-w-md mt-4'>
          <Send className="h-5 w-5" />
          <AlertTitle>WhatSend! </AlertTitle>
          <AlertDescription>
            Send <strong>Whatsapp</strong> messages without saving contact number.
          </AlertDescription>
        </Alert>

        <Card className="w-full max-w-md mt-4 pt-5">
          <CardContent className="grid gap-4">
            <div className="grid gap-2">
              <Label htmlFor="email">Select Country Code:</Label>
              <div className='w-full flex-gap-2 max-w-md flex flex-row'>
                <img className='h-7 mt-1' src={flagUrl} alt="country flag" />
                <Select onValueChange={(e) => changeFlag(e)} >
                  <SelectTrigger className="ml-3 w-full max-w-md">
                    <SelectValue placeholder="+91 India" />
                  </SelectTrigger>
                  <SelectContent>
                    {countries.map((country: any) => (
                      <SelectItem key={country.alpha3Code}
                        data-alpha3code={country.alpha3Code}
                        value={country.alpha3Code}
                      >
                        +{country.callingCodes} {country.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

            </div>
            <div className="grid gap-2">
              <Label htmlFor="mobile-number">Enter Phone Number:</Label>
              <Input
                className='shadow'
                value={number}
                onChange={onNumberType}
                type="tel"
                minLength={5}
                maxLength={15}
                placeholder="Enter your number!"
                id="mobile-number"
                required
              />
            </div>
          </CardContent>
          <CardFooter className='flex-col'>
            <Button className="w-full" onClick={openWhatsapp}>
              <Send className='pr-2' /><strong>Send Message</strong>{" "}
            </Button>
            <Alert className='w-500 mt-8'>
              <CircleAlert className="h-5 w-5" />
              <AlertDescription className='text-xs'>
                This application is not associated with <strong>WhatsApp</strong> and It uses <strong>WhatsApp </strong>
                api to redirect the contact number.

                <p>
                  Created with <Heart className='inline' /> by <a rel="noopener" href="https://twitter.com/bilal8492" target="_blank">
                    Bilal
                  </a>
                  . Source code available at {" "}
                  <a className=' font-bold underline' rel="noopener" href="https://github.com/bilal8492/whatSend" target="_blank">
                    Github
                  </a>
                  <ExternalLink className='inline h-3' />
                </p>
                <p>
                  For any feedback and bug report create an {" "}
                  <a className='bold underline' rel="noopener"
                    href="https://github.com/bilal8492/WhatSend/issues"
                    target="_blank"
                  >
                    Issue
                  </a><ExternalLink className='inline h-3' />
                </p>
              </AlertDescription>
            </Alert>
          </CardFooter>
        </Card>
      </div>

    </ThemeProvider>
  );
}

export default App
