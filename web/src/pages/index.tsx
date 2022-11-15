import Image from 'next/image'
import appPreviewImage from '../assets/app-nlw-copa-preview.png'
import logoImg from '../assets/logo.svg'
import usersAvatarExampleImg from '../assets/users-avatar-example.png'
import iconCheckImg from '../assets/icon-check.svg'

/*interface HomeProps {
  count: number;
}*/

export default function Home() {
  return (
    <div className='max-w-[1124px] mx-auto grid grid-cols-2 items-center h-screen'>
      <main>
        <Image
          src={logoImg}
          alt="NLW Copa"
        />

        <h1 className='mt-14 text-white text-5xl font-bold leading-tight'>Crie seu próprio bolão online</h1>

        <div>
          <Image
            src={usersAvatarExampleImg}
            alt="Celulares"
          />

          <strong>
            <span>+ 12.592</span> pessoas já estão usando
          </strong>

        </div>

        <form>
          <input type="text" name="" id="" required placeholder='Qual o nome do Bolão' />
          <button type="submit">Criar meu bolão</button>
        </form>

        <p>Após criar seu bolão, você receberá um código único que poderá usar para convidar outras pessoas</p>

        <div>
          <Image
            src={iconCheckImg}
            alt="Celulares"
          />
        </div>
        <div>
          <Image
            src={iconCheckImg}
            alt="Celulares"
          />
        </div>
      </main>

      
      <Image
        src={appPreviewImage}
        alt="Celulares"
      />
    </div>
  )
}

/*export const getServerSideProps = async () => {
  const response = await fetch('http://fastify:3333/pools/count')
  const data = await response.json()

  return {
    props: {
      count: data.count
    }
  }
}*/
