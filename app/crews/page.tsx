import React from 'react';
import Image from 'next/image';

const CrewsPage = () => {
  const sections = [
    {
      title: "High Committee",
      members: [
        { name: "Afzal", title: "Director", image: "/high_comm/Afzal.JPG" },
        { name: "Sayyid", title: "Vice Director", image: "/high_comm/Sayyid.jpeg" },
        { name: "Eunice", title: "Secretary", image: "/high_comm/Eunice.JPG" },
        { name: "Hidnee", title: "Vice Secretary", image: "/high_comm/Hidnee.JPG" },
        { name: "Zaf", title: "Treasurer", image: "/high_comm/Zaf.jpeg" },
      ],
    },
    {
      title: "Multimedia and Publicity",
      members: [
        { name: "Farish", title: "Head of Department", image: "/multimedia/Farish.JPG"},
        { name: "Auni", image: "/multimedia/Auni.JPG"},
        { name: "Danish", image: "/multimedia/Danish.jpeg"},
        { name: "Fariey", image: "/multimedia/Fariey.JPG"},
        { name: "Ifhami", image: "/multimedia/Ifhami.JPG"},
        { name: "Zahra", title:"Advisor", image: "/multimedia/Zahra.jpg"},
      ],
    },
    {
      title: "Logistics, Technical, and Video",
      members: [
        { name: "Arif", title: "Head of Department", image: "/logitech_vid/arif.JPG"},
        { name: "Afiq Jasmy",  image: "/logitech_vid/afiq_jasmy.JPG"},
        { name: "Alief",  image: "/logitech_vid/alief.JPG"},
        { name: "Hana",  image: "/logitech_vid/hana.JPG"},
        { name: "Kisshore",  image: "/logitech_vid/kisshore.JPG"},
        { name: "Iman",  image: "/logitech_vid/iman.jpeg"},
        
      ],
    },
    {
      title: "Creative & Content",
      members: [
        { name: "Afiq", title: "Head of Department", image: "/content_creative/afiq.jpeg"},
        { name: "Adib", image: "/content_creative/adib.jpeg"},
        { name: "Aiman", image: "/content_creative/aiman.JPG"},
        { name: "Aqlan", image: "/content_creative/aqlan.JPG"},
        { name: "Shi Yee", image: "/content_creative/shi_yee.JPG"},
        { name: "Erika", image: "/content_creative/erika.jpeg"},
        { name: "Mar", image: "/content_creative/mar.JPG"},
        { name: "Rashman", image: "/content_creative/rashman.JPG"},
        { name: "Shi Yong", title:"Advisor", image: "/content_creative/shi_yong.JPG"},
      ],
    },
    {
      title: "Sponsorship and Public Relations",
      members: [
        { name: "Harshini", title: "Head of Department", image: "/sponsor_public_rel/Harshini.JPG" },
        { name: "Nabilah", image: "/sponsor_public_rel/Nabilah.JPG" },
        { name: "Fara", image: "/sponsor_public_rel/Fara.jpeg"},
        { name: "Adam", title: "Advisor" ,image: "/sponsor_public_rel/Adam.jpg"},
      ],
    },
  ];

  return (
    <div style={{ padding: '20px' }}>
      <h1 style={{ textAlign: 'center', fontWeight: 'bold', textDecoration: 'underline' }}>All Crews</h1>
      {sections.map((section, index) => (
        <div key={index} style={{ marginTop: '30px' }}>
          <h2 style={{ marginBottom: '10px' }}>{section.title}</h2>
          <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
            {section.members.map((member, idx) => (
              <div key={idx} style={{ textAlign: 'center', width: '150px' }}>
                <div style={{ borderRadius: '50%', overflow: 'hidden', width: '120px', height: '120px', margin: '0 auto' }}>
                  <Image
                    src={member.image}
                    alt={member.name}
                    width={120}
                    height={120}
                    objectFit="cover"
                  />
                </div>
                <p style={{ fontWeight: 'bold', margin: '10px 0 5px' }}>{member.name}</p>
                {member.title && <p style={{ fontStyle: 'italic', color: 'gray' }}>{member.title}</p>}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default CrewsPage;
