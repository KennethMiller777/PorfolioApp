//#region imports
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import ContactMe from './components/contactMe/ContactMe';
import Navbar from './components/navbar/Navbar';
import TextSection from './components/section/TextSection';
import ListSection from './components/section/ListSection';
import HistorySection from './components/section/HistorySection';

import Sections from './content/Sections';
import ContactInfo from './content/ContactInfo';

import './resources/Header.css';
import './resources/Footer.css';
import './resources/Main.css';
//#endregion imports

const myName = "Kenneth Miller";
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <>
    <header className='web-header'>
      <h3><a id='my-name' href="#">{myName}</a></h3>

      <Navbar sections={Sections}></Navbar>
    </header>

    <main className="web-main">
      <h1 className='content-header'>{myName}</h1>
      {Sections.map((section, i) =>{
        switch (section.type) {
          case 'text':
            return <TextSection sectionInfo={section}></TextSection>
          case 'list':
            return <ListSection sectionInfo={section}></ListSection>
          case 'history':
            return <HistorySection sectionInfo={section}></HistorySection>
          default:
            break;
        }
      })}
    </main>

    <footer className='web-footer'>
      <ContactMe contactInfo={ContactInfo}></ContactMe>
    </footer>
  </>
);