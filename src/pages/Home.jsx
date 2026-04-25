import React from 'react';
import VirtualShowroom from '../components/VirtualShowroom';
import AboutUs from '../components/AboutUs';
import Products from '../components/Products';
import Solutions from '../components/Solutions';
import ContactForm from '../components/ContactForm';

export default function Home() {
  return (
    <main>
      <VirtualShowroom />

      <AboutUs />
      <Products />
      <Solutions />
      <ContactForm />
    </main>
  );
}
