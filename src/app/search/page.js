export const metadata = {
  title:"Flight Search",
  description:"Find cheap flights worldwide"
}

async function getFlights(searchParams){

  const res = await fetch(
    `https://api.example.com/flights?from=${searchParams.from}&to=${searchParams.to}&date=${searchParams.date}`,
    {cache:"no-store"}
  )

  return res.json()

}

export default async function Page({searchParams}){

  const flights = await getFlights(searchParams)

  return(

    <div className="max-w-6xl mx-auto p-6">

      <h1 className="text-2xl font-bold mb-6">
        Flights {searchParams.from} → {searchParams.to}
      </h1>

      {flights.map(f=>(
        <div key={f.id} className="border p-4 rounded-lg">

          {f.airline}

          <div>
            {f.departure} → {f.arrival}
          </div>

          <div>
            ${f.price}
          </div>

        </div>
      ))}

    </div>

  )

}