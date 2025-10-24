export default function Menu(){
    return(
        <div className="p-2 px-6 border-[1px] border-purple-200 bg-purple-100/10 backdrop-blur-md rounded-[50px]">
            <ul className="flex items-center  gap-10 list-none justify-around text-white poppins-thin">
                <li><a href="#sobre"  className="hover:text-purple-400">Sobre</a></li>
                <li><a href="#empresas" className="hover:text-purple-400">Empresas</a></li>
                <li><a href="#alunos" className="hover:text-purple-400">Alunos</a></li>
                <li><a href="#depoimentos" className="hover:text-purple-400">Depoimentos</a></li>
            </ul>
        </div>
    )
}