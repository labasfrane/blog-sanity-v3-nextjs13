"use client";

import React, { useState } from "react";

const Banner = () => {
  const [showFullText, setShowFullText] = useState(false);
  function toggleText() {
    setShowFullText(!showFullText);
  }

  return (
    <div className="mb-2 px-5 md:px-10 py-10 bg-bg-embrio bg-center bg-fixed flex flex-col drop-shadow-2xl">
      <h2 className="mb-8 text-center font-semibold md:text-start md:text-3xl text-white">
        Hrvatsko društvo za embriologiju i potpomognutu oplodnju
      </h2>

      <p
        className={`text-white line-clamp-6 md:line-clamp-none text-sm md:text-base leading-6 ${
          showFullText ? "line-clamp-none" : ""
        }`}
      >
        Dana 25.10.2016 u Splitu je osnovano Hrvatsko društvo za embriologiju i
        potpomognutu oplodnju, strukovna udruga čiji je cilj promicanje i razvoj
        embriološke struke te izvorna ideja o zajedništvu medicine i biologije
        na području potpomognute oplodnje.
        <br />
        <br />
        Društvo su osnovali klinički embriolozi, osnivači većine domaćih
        laboratorija za izvantjelesnu oplodnju, koji su sudjelovali u
        postavljanju temelja hrvatske embriologije i na ovom području djeluju
        stručno i znanstveno više od dvadeset godina.
        <br />
        <br />
        Namjera osnivača je okupljanje najiskusnijih hrvatskih stručnjaka na
        području potpomognute oplodnje, embriologa i ginekologa subspecijalista
        humane reprodukcije, koji bi kroz društvo zajednički promišljali i
        predlagali rješenja za složene probleme koje ova djelatnost postavlja
        profesionalcima i društvenoj zajednici.
        <br />
        <br />
        Pitanja zakonske regulacije potpomognute oplodnje u svim njenim
        aspektima, moraju uključiti zajednički rad naših profesija, suradnju s
        Ministarstvom zdravstva te pokušati pomiriti često isključive stavove
        unutar i izvan struke. Željeli bismo da naše društvo bude mjesto plodne
        suradnje između stručnjaka uključenih u ovu izuzetnu djelatnost.
      </p>
      <button
        onClick={toggleText}
        className="text-white md:hidden block text-xs mt-2 ml-auto mr-2 border-2 rounded-md px-4 py-2"
      >
        {showFullText ? "X" : "Više"}
      </button>
    </div>
  );
};

export default Banner;
