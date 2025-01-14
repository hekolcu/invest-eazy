import Head from "next/head";

import Navbar from "../../components/navbar";
import Description from "../../components/propertyDetails/description";
import PropertyNumbers from "../../components/propertyDetails/numbers";
import Details from "../../components/propertyDetails/details";
import Footer from "../../components/footer";
import { properties } from '../../data'

export default function PropertyDetails({ property }) {
  return (
    <>
      <Head>
        <title>InvestEazy - Property Details</title>
        <meta name="description" content="Crowdfunding Accredited Investors for Investment Oppourtunities" />
        <link rel="icon" href="/vercel.ico" />
      </Head>

      <Navbar />
      <Description propertyData={property} />
      <PropertyNumbers propertyData={property} />
      <Details propertyData={property}  />
      <Footer />
    </>
  )
}

export async function getStaticPaths() {
  return {
    paths: [
      {
        params: { propertyId: '1' }
      },
      {
        params: { propertyId: '2' }
      },
      {
        params: { propertyId: '3' }
      }
    ],
    fallback: false
  }
}

export async function getStaticProps(context) {
  const { params } = context;
  // const response = await fetch(`http://localhost:4000/properties/${params.propertyId}`)
  // const data = await response.json();
  const property = properties.filter(p => p.id == params.propertyId)

  return {
    props: {
      property: property[0]
    }
  }
}