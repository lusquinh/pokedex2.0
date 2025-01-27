import Image from "next/image";

const Home = () => {
  return (
    <main className=" flex-1 flex flex-col items-center p-16 gap-16 ">
      <Image
        alt="imagem Pokedex"
        src="/logo-pokemon.png"
        width={500}
        height={200}
      />

      <section className="w-full flex flex-row gap-6 flex-wrap justify-center bg-red-700">
        <div className="shadow-xl max-w-[300px] w-full flex flex-col items-center p-7 gap-6">
          <Image
            alt="bubasauro"
            src={"/pokemons/1.png"}
            width={200}
            height={200}
          />

          <div className="flex flex-row gap-3">
            <Image
              alt="tipo do pokemon"
              src={"/tipos/grass.svg"}
              width={25}
              height={25}
            />
            <Image
              alt="tipo do pokemon"
              src={"/tipos/poison.svg"}
              width={25}
              height={25}
            />
          </div>

          <p>
            For some time after its birth, it uses the nutrients that are packed
            into the seed on its back in order to grow.
          </p>
        </div>

        <div className="shadow-xl max-w-[300px] w-full flex flex-col items-center p-7 gap-6">
          <Image
            alt="bubasauro"
            src={"/pokemons/1.png"}
            width={200}
            height={200}
          />

          <div className="flex flex-row gap-3">
            <Image
              alt="tipo do pokemon"
              src={"/tipos/grass.svg"}
              width={25}
              height={25}
            />
            <Image
              alt="tipo do pokemon"
              src={"/tipos/poison.svg"}
              width={25}
              height={25}
            />
          </div>

          <p>
            For some time after its birth, it uses the nutrients that are packed
            into the seed on its back in order to grow.
          </p>
        </div> <div className="shadow-xl max-w-[300px] w-full flex flex-col items-center p-7 gap-6">
          <Image
            alt="bubasauro"
            src={"/pokemons/1.png"}
            width={200}
            height={200}
          />

          <div className="flex flex-row gap-3">
            <Image
              alt="tipo do pokemon"
              src={"/tipos/grass.svg"}
              width={25}
              height={25}
            />
            <Image
              alt="tipo do pokemon"
              src={"/tipos/poison.svg"}
              width={25}
              height={25}
            />
          </div>

          <p>
            For some time after its birth, it uses the nutrients that are packed
            into the seed on its back in order to grow.
          </p>
        </div> <div className="shadow-xl max-w-[300px] w-full flex flex-col items-center p-7 gap-6">
          <Image
            alt="bubasauro"
            src={"/pokemons/1.png"}
            width={200}
            height={200}
          />

          <div className="flex flex-row gap-3">
            <Image
              alt="tipo do pokemon"
              src={"/tipos/grass.svg"}
              width={25}
              height={25}
            />
            <Image
              alt="tipo do pokemon"
              src={"/tipos/poison.svg"}
              width={25}
              height={25}
            />
          </div>

          <p>
            For some time after its birth, it uses the nutrients that are packed
            into the seed on its back in order to grow.
          </p>
        </div> <div className="shadow-xl max-w-[300px] w-full flex flex-col items-center p-7 gap-6">
          <Image
            alt="bubasauro"
            src={"/pokemons/1.png"}
            width={200}
            height={200}
          />

          <div className="flex flex-row gap-3">
            <Image
              alt="tipo do pokemon"
              src={"/tipos/grass.svg"}
              width={25}
              height={25}
            />
            <Image
              alt="tipo do pokemon"
              src={"/tipos/poison.svg"}
              width={25}
              height={25}
            />
          </div>

          <p>
            For some time after its birth, it uses the nutrients that are packed
            into the seed on its back in order to grow.
          </p>
        </div> <div className="shadow-xl max-w-[300px] w-full flex flex-col items-center p-7 gap-6">
          <Image
            alt="bubasauro"
            src={"/pokemons/1.png"}
            width={200}
            height={200}
          />

          <div className="flex flex-row gap-3">
            <Image
              alt="tipo do pokemon"
              src={"/tipos/grass.svg"}
              width={25}
              height={25}
            />
            <Image
              alt="tipo do pokemon"
              src={"/tipos/poison.svg"}
              width={25}
              height={25}
            />
          </div>

          <p>
            For some time after its birth, it uses the nutrients that are packed
            into the seed on its back in order to grow.
          </p>
        </div>
      </section>
    </main>
  );
};

export default Home;
