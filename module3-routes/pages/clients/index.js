import Link from 'next/link';

function ClientsPage() {

const clients =[
    {id:"max", name:"Maxmillion"},
    {id:"srini",name:"Srinath"}
];
const cb = (e) =>{
    return <li key={e.id}><Link href={`/clients/${e.id}`}>{e.name}</Link></li>

}

  return (
    <div>
      <h1>The Clients Page</h1>
      <ul>
         {clients.map(cb)}
      </ul>
    </div>
  );
}

export default ClientsPage;