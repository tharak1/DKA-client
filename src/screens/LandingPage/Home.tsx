import React from 'react';

const Home: React.FC = () => {
  return (
    <header id="home" className="w-full bg-white-100 p-20 relative text-left">
      <div>
        <h1 className="text-4xl font-bold mb-6">
          <span className="bg-gradient-to-r from-red-500 via-green-500 to-gray-600 bg-clip-text text-transparent">
            DivyaKala Academy
          </span>
        </h1>
        <h2 className="text-2xl mb-8 whitespace-pre-line">
          {`It's a Big World\nOut There, Go\nExplore.`}
        </h2>
        <p className="mb-6 bg-white p-0">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br />
          Proin vel ultricies nulla, a fermentum ex. <br />
          Integer vitae orci sit amet erat vehicula euismod. <br />
          Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. <br />
          Suspendisse potenti. <br />
          Curabitur vel sem id quam volutpat elementum. <br />
          Mauris a nisl nec nisl ullamcorper efficitur.
        </p>

        <button className="relative bg-gradient-to-r from-red-500 via-green-500 to-gray-600 text-white py-2 px-4 rounded">
          Explore Now
          <span className="absolute left-0 bottom-0 w-full h-0.5 "></span>
        </button>

        <div className="relative mt-10">
          <div className="border-t border-gray-500 w-full absolute top-1/2 left-0 transform -translate-y-1/2"></div>
          <h3 className="relative text-2xl font-bold bg-white px-4 mx-auto w-max z-10 mt-5">
            ABOUT DKA
          </h3>
        </div>

        <p className="mt-10 px-20">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla. <br />
          Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur sodales ligula in libero. Sed dignissim lacinia nunc. Curabitur tortor. Pellentesque nibh. Aenean quam. In scelerisque sem at dolor. Maecenas mattis. Sed convallis tristique sem. Proin ut ligula vel nunc egestas porttitor. <br />
          Morbi lectus risus, iaculis vel, suscipit quis, luctus non, massa. Fusce ac turpis quis ligula lacinia aliquet. Mauris ipsum. Nulla metus metus, ullamcorper vel, tincidunt sed, euismod in, nibh. Quisque volutpat condimentum velit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. <br />
          Nam nec ante. Sed lacinia, urna non tincidunt mattis, tortor neque adipiscing diam, a cursus ipsum ante quis turpis. Nulla facilisi. Ut fringilla. Suspendisse potenti. Nunc feugiat mi a tellus consequat imperdiet. Vestibulum sapien. Proin quam. Etiam ultrices. Suspendisse in justo eu magna luctus suscipit. <br />
          Sed lectus. Integer euismod lacus luctus magna. Quisque cursus, metus vitae pharetra auctor, sem massa mattis sem, at interdum magna augue eget diam.
        </p>
      </div>
    </header>
  );
}

export default Home;


// import React from 'react';

// const Home: React.FC = () => {
//   return (
//     <header id="home" className="w-[1200px] bg-white-100 p-2 relative text-left">
//       <div>
//         <h1 className="text-4xl font-bold mb-6">
//           <span className="bg-gradient-to-r from-red-500 via-green-500 to-gray-600 bg-clip-text text-transparent">
//             DivyaKala Academy
//           </span>
//         </h1>
//         <h2 className="text-2xl mb-8 whitespace-pre-line">
//           {`It's a Big World\nOut There, Go\nExplore.`}
//         </h2>
//         <p className="mb-6 bg-white p-0">
//           Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br />
//           Proin vel ultricies nulla, a fermentum ex. <br />
//           Integer vitae orci sit amet erat vehicula euismod. <br />
//           Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. <br />
//           Suspendisse potenti. <br />
//           Curabitur vel sem id quam volutpat elementum. <br />
//           Mauris a nisl nec nisl ullamcorper efficitur.
//         </p>

//         <button className="relative bg-gradient-to-r from-red-500 via-green-500 to-gray-600 text-white py-2 px-4 rounded">
//           Explore Now
//           <span className="absolute left-0 bottom-0 w-full h-0.5 bg-red-500"></span>
//         </button>
//       </div>
//     </header>
//   );
// }

// export default Home;

