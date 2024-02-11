export function NoteCard() {
    return (
        <button className='rounded-md text-left outline-none bg-slate-800 p-5 space-y-3 relative hover:ring-2 hover:ring-slate-600 focus:ring-2 focus:ring-lime-400'>
          <span className='text-small font-medium text-slate-300'>
            há 4 dias
          </span>
          <p className='text-sm leading-6 text-slate-400'>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui earum, hic laborum ratione quas officiis corporis illo eum nemo voluptate vero aliquid saepe placeat tempora fugiat iusto. Odio, adipisci recusandae!
          </p>
          <div className='absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-black/60 to-black/0 pointer-events-none'/>
        </button>
    )
}