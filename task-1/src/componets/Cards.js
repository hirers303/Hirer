import React from 'react';

const features = [
  {
    name: 'For Job Seekers',
    description: 'If you are looking for a job',
    image: "https://static.wixstatic.com/media/a2ec7c_049cafd5702a44bb81c2532f8ad26b3c~mv2.jpg/v1/fill/w_244,h_286,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/eps10-blue-recruitment-search-job-vacanc.jpg",
  },
  {
    name: 'For Employers',
    description: 'If you are looking to hire staff',
    image: "https://static.wixstatic.com/media/a2ec7c_9786a8e7b743492c903704403432af3a~mv2.png/v1/fill/w_244,h_286,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/eps10-blue-recruitment-search-job-vacanc.png",
  },
];

const Cards = () => {
  return (
    <div className="mx-auto my-6 max-w-2xl grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2">
      {features.map((feature) => (
        <div key={feature.name} className="mb-8 flex flex-col items-center lg:flex-row">
          <img
            src={feature.image}
            alt={feature.name === 'For Job Seekers' ? 'Job Seeker' : 'Job Giver'}
            className="h-auto max-w-full object-cover lg:w-40 lg:h-40 mt-2 lg:mr-4 object-top"
          />
          <div className="mt-4 text-center lg:text-left">
            <dt className="text-base font-semibold leading-7 text-gray-900">
              {feature.name}
            </dt>
            <dd className="mt-2 text-base leading-7 text-gray-600">
              {feature.description}
            </dd>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Cards;
