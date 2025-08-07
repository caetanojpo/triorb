import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { MapPin, Phone, Globe, Instagram } from 'lucide-react';

export const RenascenceContactInfo = () => {
  const contacts = [
    {
      icon: <MapPin size={20} />,
      text: 'Av. Rui Barbosa - Centro, Assis/SP / Av. do Manganês, 451 - Distrito Industrial, Assis/SP',
      href: 'https://maps.app.goo.gl/gt9hsTkR1QQu2CEm6',
    },
    {
      icon: <Phone size={16} />,
      text: '(+55) 18 3421-1000 / (+55) 18 99765-5987',
      href: 'https://wa.me/5518997655987',
    },
    {
      icon: <Globe size={20} />,
      text: 'https://duaco.com.br/',
      href: 'https://duaco.com.br/',
    },
    {
      icon: <Instagram size={20} />,
      text: '@construtoraduaco',
      href: 'http://instagram.com/construtoraduaco',
    },
  ];

  return (
    <div className="mt-10 xl:mt-0">
      <nav>
        <ul className="flex flex-col gap-6 xl:gap-4 text-sm xl:text-base">
          {contacts.map((contact, index) => (
            <motion.li
              key={index}
              className="flex w-fit"
              initial={{ x: -30, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <motion.div whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
                <Link
                  className="flex gap-3 items-center hover:opacity-80 transition-opacity duration-200 border-b border-transparent hover:border-renascence pb-1"
                  href={contact.href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {contact.icon}
                  <span>{contact.text}</span>
                </Link>
              </motion.div>
            </motion.li>
          ))}
        </ul>
      </nav>
    </div>
  );
};
