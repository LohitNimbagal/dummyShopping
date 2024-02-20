import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'

function currencyConvert() {
  const [currencyCode, setCurrencyCode] = useState("inr")
  const [currency, setCurrency] = useState(null)

  useEffect(() => {
    (() => {

      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
      } else {
        console.log("Geolocation is not supported by this browser.");
      }

      function showPosition(position) {
        GetAddress(position.coords.latitude, position.coords.longitude);
      }

      function GetAddress(lat, lng) {

        axios
          .get(`https://api.opencagedata.com/geocode/v1/json?key=9a3e90e6b0b04583bf95abf76101db35&q=${lat}%2C${lng}&pretty=1`)
          .then(response => setCurrencyCode(response.data.results[0].annotations.currency.iso_code.toLowerCase()))
      }
    })()
  })

  useEffect(() =>{
    (() => (
      axios
      .get(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/usd.json`)
      .then(response => setCurrency({
        code: currencyCode,
        rate: response.data.usd[currencyCode]
      }))

    )) ()
  }, [currencyCode])


  return currency
}

export default currencyConvert