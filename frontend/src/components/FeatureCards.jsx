const FeatureCards = () => {
  return (
    // <div className="flex flex-col gap-[12rem] w-full">
    //   <div className="card lg:card-side bg-base-100 shadow-2xl rounded-4xl">
    //     <figure className="max-h-[80vh]">
    //       <img
    //         className="object-fill"
    //         src="https://plus.unsplash.com/premium_photo-1684444605542-93725082d214?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    //         alt="Notes"
    //       />
    //     </figure>
    //     <div className="card-body">
    //       <h2 className="card-title ">Make comprehensive notes</h2>
    //       <p>Create them simply in markdown and we do the magic for you!</p>
    //     </div>
    //   </div>
    //   <div className="card lg:card-side bg-base-100 shadow-2xl rounded-4xl">
    //     <figure className="max-h-[80vh]">
    //       <img
    //         className="object-fill"
    //         src="https://plus.unsplash.com/premium_photo-1745835775085-866d65d92daf?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    //         alt="Movie"
    //       />
    //     </figure>
    //     <div className="card-body">
    //       <h2 className="card-title ">
    //         Have your flash cards ready and test your progress!
    //       </h2>
    //       <p>Safe the important stuff and have them always a click away..</p>
    //     </div>
    //   </div>
    //   <div className="card lg:card-side bg-base-100 shadow-2xl rounded-4xl">
    //     <figure className="max-h-[80vh]">
    //       <img
    //         className="object-fill"
    //         src="https://images.unsplash.com/photo-1504509546545-e000b4a62425?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    //         alt="Movie"
    //       />
    //     </figure>
    //     <div className="card-body">
    //       <h2 className="card-title ">
    //         All your playlists there, to learn and have fun while learning!
    //       </h2>
    //       <p>
    //         watch that exciting Youtube tutorial while taking notes! then study
    //         hard to the beats of your Spotify jams
    //       </p>
    //     </div>
    //   </div>
    //   <div className="card lg:card-side bg-base-100 shadow-2xl rounded-4xl">
    //     <figure className="max-h-[80vh]">
    //       <img
    //         className="object-fill"
    //         src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    //         alt="Movie"
    //       />
    //     </figure>
    //     <div className="card-body">
    //       <h2 className="card-title">
    //         Those were a few thing you can do here come join us and discover the
    //         transition from chaos to a complete focus!
    //       </h2>
    //       <p>
    //         Did we mention It is free well yeah! it is! give it a try, we
    //         guarantee you’ll like it in your own Study Dojo
    //       </p>
    //       <button className="btn btn-soft btn-success btn-xl">Join Now!</button>
    //     </div>
    //   </div>
    // </div>
    <div className="carousel w-full">
      <div id="slide1" className="carousel-item relative w-full">
        <div className="card lg:card-side bg-base-100 shadow-2xl rounded-4xl">
          <figure className="max-h-[80vh]">
            <img
              className="lg:object-fill"
              src="https://plus.unsplash.com/premium_photo-1684444605542-93725082d214?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Notes"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title ">Make comprehensive notes</h2>
            <p>Create them simply in markdown and we do the magic for you!</p>
          </div>
        </div>
        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
          <a href="#slide4" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide2" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide2" className="carousel-item relative w-full">
        <div className="card lg:card-side bg-base-100 shadow-2xl rounded-4xl">
          <figure className="max-h-[80vh]">
            <img
              className="object-fill"
              src="https://plus.unsplash.com/premium_photo-1745835775085-866d65d92daf?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Movie"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title ">
              Have your flash cards ready and test your progress!
            </h2>
            <p>Safe the important stuff and have them always a click away..</p>
          </div>
        </div>
        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
          <a href="#slide1" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide3" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide3" className="carousel-item relative w-full">
        <div className="card lg:card-side bg-base-100 shadow-2xl rounded-4xl">
          <figure className="max-h-[80vh]">
            <img
              className="object-fill"
              src="https://images.unsplash.com/photo-1504509546545-e000b4a62425?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Movie"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title ">
              All your playlists there, to learn and have fun while learning!
            </h2>
            <p>
              watch that exciting Youtube tutorial while taking notes! then
              study hard to the beats of your Spotify jams
            </p>
          </div>
        </div>
        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
          <a href="#slide2" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide4" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide4" className="carousel-item relative w-full">
        <div className="card lg:card-side bg-base-100 shadow-2xl rounded-4xl">
          <figure className="max-h-[80vh]">
            <img
              className="object-fill"
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Movie"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              Those were a few thing you can do here come join us and discover
              the transition from chaos to a complete focus!
            </h2>
            <p>
              Did we mention It is free well yeah! it is! give it a try, we
              guarantee you’ll like it in your own Study Dojo
            </p>
            <button className="btn btn-soft btn-success btn-xl">
              Join Now!
            </button>
          </div>
        </div>
        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
          <a href="#slide3" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide1" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
    </div>
  );
};

export default FeatureCards;
