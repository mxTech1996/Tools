'use client';
import { pageName } from '@/data';
import axios from 'axios';
import { useState, useEffect } from 'react';

const url = `https://cms.mxtechconsulting.com/api/website/${pageName}/`;
const token = '069c07b020945e19690b026f15a9605f9cc84fa0';
const initialState = {
  name: "Tools",
  url: "https://www.toolsmaintech.lat",
  telephone: "5530471485",
  email: "admmaintech@emailsecure.lat",
  address:
    "AV. BATALLON DE SAN PATRICIO 111, PISO 26, SAN PEDRO GARZA GARCÍA, C.P. 66269,NUEVO LEÓN, MEXICO.",
  description:
    "Our goal  is to provide expert guidance on how to improve operations, optimize supply chains, and maximize profitability for businesses dealing with industrial, agricultural, construction, and general-use machinery.",
  subtitle:
    "Consulting and Advisory Services for Wholesale Trade of Machinery and General Equipment",
  image_hero:
    "https://cms-webserver-statics.s3.amazonaws.com/media/websites/tolls._1.jpg",
  image_hero2:
    "https://cms-webserver-statics.s3.amazonaws.com/media/websites/tolls_2_.jpg",
  iconImage:
    "https://cms-webserver-statics.s3.amazonaws.com/media/websites/logo-no-background_RWpPtgR.png",
  info: [
    {
      title: "Vision",
      description:
        "To be the leading provider of expert consulting and advisory services in wholesale trade of machinery and general equipment, driving success and growth for businesses worldwide.",
    },
    {
      title: "Mission",
      description:
        "To empower businesses in the wholesale machinery and equipment sector by offering tailored consulting, strategic advice, and innovative solutions that enhance operational efficiency, profitability, and market competitiveness.",
    },
    {
      title: "Integrity",
      description:
        "Integrity,We conduct our business with the highest ethical standards, ensuring transparency and honesty in all our interactions,Expertise, Our team is dedicated to continuous learning and sharing knowledge to provide the best technical advice in the industry, Customer Focus, We prioritize our clients’ needs, delivering personalized solutions that add value to their operations, Innovation, We embrace new technologies and methodologies to stay ahead in the rapidly evolving electrical sector.",
    },
  ],
  services: [
    {
      title: "Market Analysis and Research",
      description:
        "In-depth market studies to identify opportunities, trends, and potential risks in the wholesale machinery and equipment sector.",
      image:
        "https://cms-webserver-statics.s3.amazonaws.com/media/services/tolls_3.jpg",
    },
    {
      title: "Supply Chain Optimization",
      description:
        "Expert advice on streamlining supply chains to improve efficiency, reduce costs, and enhance product availability.",
      image:
        "https://cms-webserver-statics.s3.amazonaws.com/media/services/tolls_4.jpg",
    },
    {
      title: "Regulatory Compliance Consulting",
      description:
        "Guidance on navigating legal and regulatory requirements related to the wholesale trade of machinery and general equipment.",
      image:
        "https://cms-webserver-statics.s3.amazonaws.com/media/services/tolls_5_.jpg",
    },
    {
      title: "Business Strategy Development",
      description:
        "Tailored strategic planning to help businesses grow, expand, and improve their competitive positioning in the market.",
      image:
        "https://cms-webserver-statics.s3.amazonaws.com/media/services/tolls_7_.jpg",
    },
    {
      title: "Sales and Marketing Advisory",
      description:
        "Support in developing effective sales strategies and marketing plans to increase brand visibility and drive sales in the wholesale market.",
      image:
        "https://cms-webserver-statics.s3.amazonaws.com/media/services/tolls9.jpg",
    },
  ],
  references: [
    {
      name: "Sarah Lemm,Procurement Manager",
      description:
        "Thanks to their in-depth market analysis, we identified new suppliers and expanded our business into new markets. Their strategic advice has been invaluable to our company's growth.",
      rating: 5,
      image: null,
    },
    {
      name: "Miguel Hernandez",
      description:
        "The team provided outstanding support in regulatory compliance, ensuring our imports and exports met all legal requirements,Their knowledge and professionalism exceeded our expectations.",
      rating: 5,
      image: null,
    },
    {
      name: "Laura Diaz",
      description:
        "Their business strategy consulting helped us develop a strong plan for scaling our operations,We now have a more efficient workflow and increased profitability",
      rating: 5,
      image: null,
    },
    {
      name: "Javier Fernandez",
      description:
        "Excellent service,Their insights into supply chain optimization have helped us streamline logistics and improve our overall efficiency. I would definitely work with them again.",
      rating: 5,
      image: null,
    },
    {
      name: "John M,Manufacturing Company CEO",
      description:
        "The consulting services provided were exceptional, Their expertise in wholesale machinery trade helped us optimize our supply chain and significantly reduce costs,Highly recommended.",
      rating: 5,
      image: null,
    },
  ],
  products: [
    {
      id: 375,
      name: "Heavy Equipment",
      category: null,
      description:
        "High-performance machinery such as cranes, bulldozers, and excavators for large-scale projects",
      price: "899.99",
      stock: 100,
      content:
        "Excavators,Used for digging, lifting, and moving large amounts of earth, Bulldozers,Heavy machines equipped with a large blade at the front for pushing and grading soil, rocks, and debris. They're essential for site preparation and road construction,Cranes,Used for lifting and moving heavy loads. \r\nBackhoes, Versatile machines with a digging arm on one end and a loading bucket on the other, making them useful for digging, trenching, and lifting tasks, Loaders,These machines are designed to scoop and load materials like dirt, gravel, and sand into trucks or other machinery. They include skid-steer loaders, wheel loaders, and track loaders.",
      product_type: "NORMAL",
      image:
        "https://cms-webserver-statics.s3.amazonaws.com/media/products/tolls_11_St0tMBr.jpg",
      image2: null,
      image3: null,
    },
    {
      id: 376,
      name: "Equipment Specification Guide",
      category: null,
      description:
        "The Equipment Specification Guide  is a comprehensive document designed to assist in the selection and specification of equipment for various industries,Here are some key details and characteristics typically included in an ESG,",
      price: "1399.99",
      stock: 100,
      content:
        "Purpose,To provide a standardized framework for evaluating and comparing equipment options.\r\nScope, Covers various types of equipment across multiple sectors, such as manufacturing, healthcare, construction,Format, Often presented in a structured format, including sections for each equipment category, Customization,Can be tailored to specific industry needs or organizational requirements.",
      product_type: "NORMAL",
      image:
        "https://cms-webserver-statics.s3.amazonaws.com/media/products/t_10_.jpg",
      image2: null,
      image3: null,
    },
    {
      id: 377,
      name: "Regulatory Compliance Checklist",
      category: null,
      description:
        "The Regulatory Compliance Checklist is a comprehensive resource designed to help clients navigate local and national electrical codes and regulations. It serves as a practical guide to ensure that all electrical installations and equipment comply with the necessary safety standards and legal requirements.",
      price: "1399.99",
      stock: 100,
      content:
        "Step-by-Step Compliance Process,Clear, sequential steps to follow during the design and installation phases to ensure adherence to all regulatory requirements,Industry-Specific Guidelines,Tailored compliance information for various sectors, including residential, commercial, and industrial projects.\r\nCheckpoints for Safety Standards,Key safety standards .",
      product_type: "NORMAL",
      image:
        "https://cms-webserver-statics.s3.amazonaws.com/media/products/t_11.jpg",
      image2: null,
      image3: null,
    },
    {
      id: 378,
      name: "Material Handling Equipment",
      category: null,
      description:
        "Heavy equipment refers to large machines used in construction, mining, agriculture, and other industries for tasks that require substantial power, load capacity, and durability,These machines are designed to handle tough tasks in demanding environments.",
      price: "1399.99",
      stock: 100,
      content:
        "High Load Capacity,Heavy equipment is designed to carry large and heavy loads, often several tons, making them ideal for construction and excavation tasks, Powerful Engines,These machines typically have powerful diesel engines to provide the high torque necessary for performing heavy-duty tasks.\r\nDurability and Toughness, Built to endure harsh working conditions, such as extreme temperatures, rough terrains, and constant wear and tear,Large Dimensions,Heavy equipment is typically much larger than standard machinery, allowing for more robust and efficient operations in construction and mining.",
      product_type: "NORMAL",
      image:
        "https://cms-webserver-statics.s3.amazonaws.com/media/products/tolls_12.jpg",
      image2: null,
      image3: null,
    },
    {
      id: 381,
      name: "Pneumatic Equipment",
      category: null,
      description:
        "Pneumatic equipment refers to machines and systems that use compressed air or gas to perform various tasks. Pneumatic technology is commonly used in industrial applications due to its simplicity, reliability, and efficiency.",
      price: "1699.99",
      stock: 100,
      content:
        "Air Drills,Used in drilling operations in construction and manufacturing,Impact Wrenches,Commonly used in automotive and assembly industries to tighten or loosen bolts and nuts, Air Sanders and Grinders,For smoothing surfaces and finishing in metalworking and automotive industries, Pneumatic Hammers: Ideal for chiseling and breaking concrete, stone, or metal.",
      product_type: "NORMAL",
      image:
        "https://cms-webserver-statics.s3.amazonaws.com/media/products/trolls_14.jpg",
      image2: null,
      image3: null,
    },
    {
      id: 379,
      name: "Preventive Maintenance Planning Service",
      category: {
        id: 15,
        name: "Popular",
        description: "Features",
      },
      description:
        "The Preventive Maintenance Planning Service is designed to help organizations maintain their systems and equipment through scheduled maintenance activities,This service aims to minimize downtime, extend equipment life, and ensure optimal performance by identifying and addressing potential issues before they become critical.",
      price: "899.99",
      stock: 100,
      content:
        "Comprehensive Assessment,Initial evaluation of existing  and equipment to identify maintenance needs and potential failure points,Customized Maintenance Schedule,Development of a tailored maintenance plan that outlines specific tasks, frequencies, and responsible personnel based on equipment type and usage, Task Checklists,Detailed checklists for maintenance tasks, including inspections, cleaning, testing, and replacements, ensuring nothing is overlooked,Resource Allocation,Guidance on necessary tools, parts, and personnel needed to perform each maintenance task efficiently.",
      product_type: "NORMAL",
      image:
        "https://cms-webserver-statics.s3.amazonaws.com/media/products/tolls_13.jpg",
      image2: null,
      image3: null,
    },
    {
      id: 380,
      name: "Technical Support Hotline",
      category: {
        id: 15,
        name: "Popular",
        description: "Features",
      },
      description:
        "A Technical Support Hotline is a customer service channel that provides assistance and troubleshooting for products, services, or technologies, typically offered via phone, email, or live chat. It's designed to help users resolve issues, answer questions, and provide guidance on technical matters.",
      price: "1599.99",
      stock: 100,
      content:
        "The Technical Support Hotline provides clients with immediate access to expert advice and assistance for any questions or issues related to  equips. This service is designed to ensure that clients can resolve problems quickly and efficiently, minimizing downtime and enhancing operational effectiveness.",
      product_type: "NORMAL",
      image:
        "https://cms-webserver-statics.s3.amazonaws.com/media/products/t_14.jpg",
      image2: null,
      image3: null,
    },
    {
      id: 374,
      name: "Industrial Machinery",
      category: {
        id: 15,
        name: "Popular",
        description: "Features",
      },
      description:
        "A wide range of machinery designed for various industries, including construction, manufacturing, and agriculture.",
      price: "899.99",
      stock: 100,
      content:
        "Manufacturing Equipmen,Includes machines like CNC (Computer Numerical Control) machines, lathes, mills, and injection molding machines that are used in the production of parts and products.\r\nMaterial Handling Equipment, Includes cranes, conveyors, forklifts, and hoists used for moving materials within a factory or warehouse, Packaging Machines, Used for the packaging of goods, such as bottling machines, labeling machines, and automated packing lines, Construction Machinery, Includes bulldozers, excavators, cranes, and backhoes, used in construction and infrastructure projects.",
      product_type: "NORMAL",
      image:
        "https://cms-webserver-statics.s3.amazonaws.com/media/products/tolls_10.jpg",
      image2: null,
      image3: null,
    },
  ],
  categories: [
    {
      id: 15,
      name: "Popular",
      description: "Features",
    },
  ],
};

export const useInformation = () => {
  const [dataSite, setDataSite] = useState(initialState);


  return { dataSite };
};
