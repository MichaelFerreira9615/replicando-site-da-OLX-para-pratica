import { Link } from "react-router"

export default function MeusAnuncios () {

    const team = [
        {
            id: 1,
            photo: "https://m.media-amazon.com/images/I/714ufIPGvVL._SY466_.jpg",
            title: "Sakamoto Days 01",
            autor: "Yuto Suzuki (Autor)",
            desc: "O tempo passou pacificamente para Sakamoto desde que ele deixou o submundo. Ele está administrando uma loja de bairro com sua bela esposa e filho e ficou um pouco... fora de forma. Certo dia, uma figura de seu passado lhe faz uma visita com uma oferta que ele não pode recusar: volte para o mundo dos assassinos ou morra!",
            price: "DE R$21,95 POR R$ 43,90",
            slug:"manga-anime-sakamotoDays01" ,
            // DE R$21,95 POR R$ 43,90
        },
        {
            id: 2,
            photo: "https://m.media-amazon.com/images/I/51RGgUBn6hL._SY445_SX342_ML2_.jpg",
            title: "Berserk Vol. 2: Edição de Luxo: 02",
            autor: "Kentaro Miura (Autor)",
            desc: "Guts se depara com o Behelit, uma misteriosa pedra que pode invocar os God Hand, os terríveis senhores da escuridão, que ele deseja encontrar para completar sua vingança. Mas o Conde, senhor do feudo e tirano que ameaça o povo com a caça aos hereges, também parece ter relação com a pedra e os God Hand. Guts declara guerra ao Conde e invade seu castelo, deixando um rastro de sangue por onde passa.",
            price: "DE R$22,45 POR R$ 44,90",
            slug:"manga-anime-berserk" ,
            // DE R$22,45 POR R$ 44,90
        },
        {
            id: 3,
            photo: "https://m.media-amazon.com/images/I/61TteDR1u5L._SY342_.jpg",
            title: "Jujutsu Kaisen: Batalha de Feiticeiros Vol. 25",
            autor: "Gege Akutami (Autor)",
            desc: "Para ter o controle total do corpo de Fushiguro, Sukuna quer assassinar Tsumiki, dona do corpo em que Yorozu encarnou. Enquanto isso, Itadori e seus amigos tentam trazer Gojou de volta com o poder do Anjo, após Kurusu escapar da morte por um triz. Sukuna, o mais poderoso de todos os tempos, e Gojou, o mais poderoso da atualidade... finalmente teremos o confronto entre essas duas figuras extraordinárias?!",
            price: "R$31,25 POR R$43,90",
            slug:"manga-anime-jujutsuKaisen" ,
            // DE R$31,25 POR R$43,90
        },
        {
            id: 4,
            photo: "https://m.media-amazon.com/images/I/81aN5Q+yFIL._SY342_.jpg",
            title: "Demon slayer - kimetsu no yaiba vol. 3",
            autor: "Koyoharu Gotouge (Autor, Ilustrador)",
            desc: "Tanjirou e Nezuko cruzam caminho com onis que manipulam armas misteriosas e são subordinados diretos de Kibutsuji. Mesmo a ajuda de Tamayo e Yushirou pode não ser o bastante para enfrentá-los!! Será que eles conseguirão pistas para chegar ao seu arqui-inimigo Kibutsuji?!",
            price: "DE R$28,47 POR R$ 47,90",
            slug:"anime-manga-demonSlayer" ,
            // DE R$28,47 POR R$ 47,90 
        },
    ]

    return (
        <section className="py-14">
            <div className="max-w-screen-xl mx-auto px-4 md:px-8">
                <div className="max-w-xl">
                    <h3 className="text-gray-800 text-3xl font-semibold sm:text-4xl">
                        aqui você encontra os anuncios publicados por você
                    </h3>
                    <p className="text-gray-600 mt-3">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's standard dummy.
                    </p>
                </div>
                <div className="mt-12">
                    <ul className="grid gap-8 lg:grid-cols-2">
                        {
                            team.map((item, idx) => (
                                <Link to={`/${item.slug}-${item.id}`}>
                                                                <li key={idx} className="gap-8 sm:flex">
                                    <div className="w-full h-60">
                                        <img
                                            src={item.photo}
                                            className="w-full h-full object-contain object-center shadow-md rounded-xl"
                                            alt=""
                                        />
                                    </div>
                                    <div className="mt-4 sm:mt-0">
                                        <h4 className="text-lg text-gray-700 font-semibold">{item.title}</h4>
                                        <p className="text-indigo-600">{item.autor}</p>
                                        <p className="text-gray-600 mt-2">{item.desc}</p>
                                        <div className="mt-3 flex gap-4 text-gray-400">
                                            <p className="text-violet-600">
                                                {item.price}
                                            </p>
                                        </div>
                                    </div>
                                </li>
                                </Link>
                            ))
                        }
                    </ul>
                </div>
            </div>
        </section>
    )
}