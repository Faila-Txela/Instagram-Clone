function Footer() {
  return (
    <div className="flex flex-col items-center justify-center w-full sm:p-8 p-6 mt-10 text-sm sm:text-base text-gray-400">
      
      <div className="w-full flex flex-col items-center">
        {/* Lista de links */}
        <ul className="flex flex-wrap justify-center gap-3 text-xs sm:text-sm">
          <li><a href="#" className="hover:underline">Meta</a></li>
          <li><a href="#" className="hover:underline">Sobre</a></li>
          <li><a href="#" className="hover:underline">Blog</a></li>
          <li><a href="#" className="hover:underline">Carreiras</a></li>
          <li><a href="#" className="hover:underline">Ajuda</a></li>
          <li><a href="#" className="hover:underline">API</a></li>
          <li><a href="#" className="hover:underline">Privacidade</a></li>
          <li><a href="#" className="hover:underline">Termos</a></li>
          <li><a href="#" className="hover:underline">Localizações</a></li>
          <li><a href="#" className="hover:underline">Instagram Lite</a></li>
          <li><a href="#" className="hover:underline">Threads</a></li>
          <li><a href="#" className="hover:underline">Upload de contatos e não usuários</a></li>
          <li><a href="#" className="hover:underline">Meta Verified</a></li>
        </ul>

        {/* Seletor de idioma e copyright */}
        <ul className="flex items-center justify-center gap-2 text-xs mt-3 w-full">
          <select
            title="countries"
            name="countries"
            id="countries"
            className="bg-transparent mt-1 sm:mt-0 text-xs cursor-pointer p-2  border-gray-400 rounded"
          >
            <option value="Português">Português (Portugal)</option>
            <option value="Inglês">Inglês</option>
            <option value="Espanhol">Espanhol</option>
            <option value="Francês">Francês</option>
            <option value="Alemão">Alemão</option>
            <option value="Italiano">Italiano</option>
            <option value="Russo">Russo</option>
            <option value="Chinês">Chinês</option>
            <option value="Japonês">Japonês</option>
            <option value="Árabe">Árabe</option>
            <option value="Hindi">Hindi</option>
            <option value="Coreano">Coreano</option>
            <option value="Turco">Turco</option>
            <option value="Holandês">Holandês</option>
            <option value="Sueco">Sueco</option>
            <option value="Polonês">Polonês</option>
            <option value="Tcheco">Tcheco</option>
            <option value="Grego">Grego</option>
            <option value="Búlgaro">Búlgaro</option>
            <option value="Húngaro">Húngaro</option>
            <option value="Romeno">Romeno</option>
            <option value="Ucraniano">Ucraniano</option>
          </select>

          {/* Copyright */}
          <li className="text-xs mt-2 sm:mt-0">© 2025 Instagram from Meta</li>
        </ul>
      </div>

    </div>
  );
}

export default Footer;
