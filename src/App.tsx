import { useState } from 'react'
import image from './assets/instagram-web-lox-image.png'
import logo from './assets/insta-logo.png'
import Input from './components/input'
import PrimaryButton from './components/button'
import Footer from './components/footer'

function App() {

  const [showPassword, setShowPassword] = useState(false)
  // const [email, setEmail] = useState('')
  // const [password, setPassword] = useState('')

  // const handleFormSubmit = (e: React.FormEvent) => {
  //   e.preventDefault();
  //   // Aqui você pode adicionar a lógica para lidar com o envio do formulário
  //   console.log('Email:', email);
  //   console.log('Password:', password);
  // };

  const togglePasswordVisibility = () => {
    setShowPassword(prevState => !prevState);
  };

  return (
    <main className='flex flex-col items-center justify-between min-h-screen bg-black text-white'>
     
      <article className='mt-12 flex items-center justify-center gap-4 sm:gap-8 w-full max-w-6xl p-4 sm:p-8 flex-grow'>
        <div className='hidden sm:flex items-center justify-center'>
          <img 
            src={image} 
            alt="instagramImage" 
            className='h-[55vh] self-center flip-rtl babybear:hidden' 
          />
        </div>

        <form className='flex flex-col items-center justify-center gap-3' autoComplete='off' onClick={(e) => e.preventDefault()}> 
          <img 
          src={logo} 
          alt="instagramLogo" 
          className='w-40 sm:w-48 mb-4 sm:mb-8 filter brightness-200'
          />

          <div className='flex flex-col gap-2 w-full'>
            <Input 
              type='text' 
              autoComplete='off' 
              addClassName='w-full border-2 rounded-md' 
              placeholder='Telefone, nome de usuário ou email' 
              id='text' 
            />

            <div className='relative w-full'>
              <Input 
                type={showPassword ? 'text' : 'password'} 
                autoComplete='off' 
                addClassName='w-[36vh] border-2 rounded-md' 
                placeholder='Senha' 
                id='password' 
              />
              <button 
                type='button'
                onClick={togglePasswordVisibility}
                className='absolute right-2 top-1/2 transform -translate-y-1/2 text-black hover:text-gray-600 text-xs font-semibold transition duration-200'>
                {showPassword ? 'Ocultar' : 'Mostrar'}
              </button>
            </div>
          </div>

          <div className='flex items-center justify-center'>
            <PrimaryButton 
              onClick={() => {}} 
              name='Entrar' 
              addClassName='w-[36vh] border-2 rounded-md' 
              type='submit' 
            />
          </div>

          <div className="flex items-center justify-center space-x-2">
            <div className="flex-1 border-t border-gray-700"></div>
            <p className="m-0 text-xs text-gray-500">OU</p>
            <div className="w-32 flex-1 border-t border-gray-700"></div>
          </div>

          <div className='flex flex-col items-center gap-4 text-sm'>
            <a href="#" target="_blank" rel="noopener noreferrer" className='text-blue-600 flex items-center gap-2'>
              <span className='text-xl'>ⓕ</span>
              Entrar com o Facebook
            </a>
            <a href="#" target='_blank' rel="noopener noreferrer">Esqueceu a senha?</a>
          </div>

          <div className='text-sm'>
            <p>Não tem uma conta? <a href="#" className='text-blue-500 font-semibold'>Cadastre-se</a></p>
          </div>
        </form>
      </article>

      <Footer />
      
    </main>
  )
}

export default App
