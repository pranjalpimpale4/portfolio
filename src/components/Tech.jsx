// import React from "react";

// import { BallCanvas } from "./canvas";
// import { SectionWrapper } from "../hoc";
// import { technologies } from "../constants";

// const Tech = () => {
//   return (
//     <div className='flex flex-row flex-wrap justify-center gap-10'>
//       {technologies.map((technology) => (
//         <div className='w-28 h-28 text-center' key={technology.name}>
//           <div style={{ width: '100px', height: '100px' }}>
//             <BallCanvas icon={technology.icon} />
//           </div>
//           <div className="mt-2">{technology.name}</div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default SectionWrapper(Tech, "");

import React from "react";

import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";

const Tech = () => {
  return (
    <div className='flex flex-row flex-wrap justify-center gap-10'>
      {technologies.map((technology) => (
        <div className='w-28 h-28 text-center' key={technology.name}>
          <div
            style={{
              width: '100px',
              height: '100px',
              borderRadius: '50%',
              backgroundColor: '#f3f3f3', // Light background for the circle
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', // Optional shadow for depth
            }}
          >
            <img
              src={technology.icon}
              alt={technology.name}
              style={{ width: '50%', height: '50%' }}
            />
          </div>
          <div className="mt-2">{technology.name}</div>
        </div>
      ))}
    </div>
  );
};

export default SectionWrapper(Tech, "");
