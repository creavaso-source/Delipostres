document.addEventListener('DOMContentLoaded', function() {
// Datos de las recetas
const recipes = [
// Postres en Vasos
{
id: 1,
title: "Cheesecake de Fresa sin Horno en Vasos",
subtitle: "El postre perfecto para impresionar sin complicaciones. Delicioso, fresco y ¡sin necesidad de horno!",
image: "D:/Nueva carpeta/pagina web/imagenes/cheeskake_fresa.png",
category: "postres-en-vasos",
intro: "¡Un postre espectacular en minutos! Descubre cómo preparar este exquisito cheesecake de fresa en vasos individuales. Ideal para cenas, celebraciones o cuando quieras darte un capricho sin pasar horas en la cocina.",
ingredients: [
{
name: "Para la base",
items: ["200 g de galletas tipo Digestive o María", "100 g de mantequilla derretida", "1 cucharada de azúcar (opcional)"]
},
{
name: "Para el relleno",
items: ["400 g de queso crema (tipo Philadelphia)", "200 ml de nata para montar", "100 g de azúcar", "1 cucharadita de extracto de vainilla", "2 cucharaditas de gelatina en polvo sin sabor", "4 cucharadas de agua fría"]
},
{
name: "Para la cubierta",
items: ["250 g de fresas frescas", "3 cucharadas de azúcar", "1 cucharadita de zumo de limón", "2 cucharadas de agua"]
},
{
name: "Para decorar",
items: ["Fresas frescas en rodajas", "Hojas de menta (opcional)", "Mermelada de fresa (opcional)"]
}
],
materials: ["Vasos transparentes individuales (4-6 unidades)", "Procesador de alimentos o bolsa plástica y rodillo", "Bol grande", "Batidora eléctrica o manual", "Cazuela pequeña", "Espátula y cuchara"],
steps: [
{
title: "Preparar la base",
description: "Tritura las galletas hasta obtener un polvo fino. Mezcla con la mantequilla derretida y el azúcar. Distribuye esta mezcla en el fondo de los vasos, presionando suavemente. Refrigera.",
image: "D:/Nueva carpeta/pagina web/imagenes/cheeskakefresas_base.png"
},
{
title: "Preparar el relleno de queso",
description: "Hidrata la gelatina con agua fría. Bate el queso crema con el azúcar y la vainilla. Monta la nata. Calienta suavemente la gelatina, añádela a la mezcla de queso. Incorpora la nata con movimientos envolventes.",
image: "D:/Nueva carpeta/pagina web/imagenes/Cheeskakefresas_relleno.png"
},
{
title: "Preparar la cubierta de fresa",
description: "Lava y corta las fresas. En una cazuela, añade las fresas, el azúcar, el zumo de limón y el agua. Cocina a fuego medio hasta que espese. Deja enfriar.",
image: "D:/Nueva carpeta/pagina web/imagenes/Cheeskakefresas_cubierta.png"
},
{
title: "Montaje final",
description: "Saca los vasos de la nevera. Vierte una capa del relleno de queso sobre la base. Añade una capa de la cubierta de fresa. Decora con rodajas de fresa fresca y hojas de menta.",
image: "D:/Nueva carpeta/pagina web/imagenes/Cheeskakefresas_final.png"
},
{
title: "Refrigeración final",
description: "Refrigera los vasos durante al menos 4 horas, o idealmente toda la noche. Esto permitirá que el cheesecake se asiente y adquiera la textura perfecta.",
image: "D:/Nueva carpeta/pagina web/imagenes/Cheeskakefresas_refrigeracion.png"
}
],
tips: [
"Usa queso crema a temperatura ambiente para evitar grumos",
"No sobrebatas la nata para que no se corte",
"Asegúrate de que la gelatina esté completamente disuelta",
"Deja enfriar bien la cubierta de fresa antes de añadirla",
"Usa vasos transparentes para mostrar las capas"
],
variations: [
"Otras frutas: Sustituye las fresas por arándanos, frambuesas o mango",
"Toque crujiente: Añade granola o trocitos de galleta entre las capas",
"Versión chocolate: Añade cacao en polvo a la base o chocolate derretido al relleno",
"Sin lactosa: Usa queso crema y nata sin lactosa",
"Presentación: Usa vasos de diferentes formas y tamaños"
],
ctaText: "¡Descubre más recetas como esta!",
ctaLink: "https://go.hotmart.com/H98086971R?ap=1178"
},
{
id: 2,
title: "Mousse de Chocolate Cremosa sin Horno",
subtitle: "El placer cremoso que todos amarán, sin horno!",
image: "D:/Nueva carpeta/pagina web/imagenes/Mouse_chocolate.png",
category: "postres-en-vasos",
intro: "Una mousse de chocolate increíblemente cremosa y aireada que se prepara en minutos. Perfecta para los amantes del chocolate y para impresionar a tus invitados con un postre de restaurante en casa.",
ingredients: [
{
name: "Ingredientes principales",
items: ["200 gr de chocolate negro de buena calidad", "400 ml de nata para montar muy fría", "50 gr de azúcar glas"]
},
{
name: "Opcional",
items: ["7 gr de gelatina sin sabor hidratada", "Virutas de chocolate, cacao en polvo, frutos rojos para decorar"]
}
],
materials: ["Bol resistente al calor", "Bol grande y muy frío", "Varillas o batidora", "Vasos individuales"],
steps: [
{
title: "Derrite el chocolate",
description: "Derrite el chocolate al baño maría o en el microondas hasta que esté completamente liso. Deja que se temple ligeramente.",
image: "D:/Nueva carpeta/pagina web/imagenes/Mouse_chocolate_derritido.png"
},
{
title: "Prepara la nata montada",
description: "Bate la nata fría hasta que espese. Añade el azúcar glas poco a poco y continúa batiendo hasta obtener picos firmes.",
image: "D:/Nueva carpeta/pagina web/imagenes/Mousechocolate_nata.png"
},
{
title: "Mezcla la mousse",
description: "Incorpora suavemente el chocolate derretido a la nata montada con movimientos envolventes para mantener el aire en la mezcla.",
image: "D:/Nueva carpeta/pagina web/imagenes/Mousechocolate_mezcla.png"
},
{
title: "Refrigera y sirve",
description: "Vierte la mousse en los vasos y refrigera por al menos 3-4 horas. Decora antes de servir con virutas de chocolate o frutos rojos.",
image: "D:/Nueva carpeta/pagina web/imagenes/Mousechocolaterefrigerado.png"
}
],
tips: [
"Usa chocolate de buena calidad para mejor sabor",
"Asegúrate de que la nata esté muy fría",
"No batas en exceso la nata para evitar que se corte",
"Para una versión más intensa, usa chocolate con 70% o más de cacao"
],
variations: [
"Mousse de chocolate blanco: Sustituye el chocolate negro por chocolate blanco",
"Mousse de chocolate con menta: Añade unas gotas de esencia de menta",
"Mousse de chocolate con naranja: Incorpora ralladura de naranja a la mezcla"
],
ctaText: "¿Quieres más recetas de postres sin horno?",
ctaLink: "https://go.hotmart.com/H98086971R?ap=1178"
},
{
id: 3,
title: "Postre de Limón Express en Vaso",
subtitle: "Frescura cítrica en minutos, sin horno!",
image: "D:/Nueva carpeta/pagina web/imagenes/Limonexpreess.png",
category: "postres-en-vasos",
intro: "Un postre refrescante y vibrante que combina el sabor ácido del limón con una textura cremosa. Perfecto para los días calurosos y como final de una comida pesada.",
ingredients: [
{
name: "Ingredientes principales",
items: ["200 gr de galletas María o tipo vainilla", "50 gr de mantequilla sin sal", "1 lata de leche condensada", "1 taza de crema de leche", "½ taza de jugo de limón fresco", "Ralladura de 1 limón"]
},
{
name: "Opcional",
items: ["7 gr de grenetina hidratada y disuelta"]
}
],
materials: ["Bol", "Batidor de mano", "Vasos individuales", "Cuchara o espátula"],
steps: [
{
title: "Prepara la base",
description: "Mezcla las galletas trituradas con la mantequilla derretida. Divide esta mezcla en los vasos y presiona para formar una base compacta. Refrigera.",
image: "D:/Nueva carpeta/pagina web/imagenes/Limonbase.png"
},
{
title: "Prepara la crema de limón",
description: "En un bol, mezcla la leche condensada con el jugo y la ralladura de limón. La mezcla espesará debido a la acidez del limón.",
image: "D:/Nueva carpeta/pagina web/imagenes/Cremadelimon.png"
},
{
title: "Añade la crema de leche",
description: "Bate la crema de leche hasta que forme picos suaves. Incorpora suavemente a la mezcla de limón con movimientos envolventes.",
image: "D:/Nueva carpeta/pagina web/imagenes/Cremadeleche.png"
},
{
title: "Refrigera y sirve",
description: "Vierte la crema de limón sobre la base de galleta. Refrigera por 2-3 horas. Decora con ralladura de limón antes de servir.",
image: "D:/Nueva carpeta/pagina web/imagenes/Limonrefrigerador.png"
}
],
tips: [
"Usa limones frescos para mejor sabor",
"No bates demasiado la crema de leche para evitar que se corte",
"Si te gusta más ácido, añade más jugo de limón",
"Para una presentación más elegante, usa una manga pastelera"
],
variations: [
"Postre de lima: Sustituye el limón por limas",
"Postre de limón y frutos rojos: Añade una capa de frutos rojos",
"Postre de limón con jengibre: Incorpora un poco de jengibre rallado"
],
ctaText: "Descubre más postres refrescantes",
ctaLink: "https://go.hotmart.com/H98086971R?ap=1178"
},
// Nuevas recetas de postres en vasos
{
id: 4,
title: "Postre de Oreo en Vaso (Sin Queso Crema)",
subtitle: "¡La Explosión de Sabor que Cautivará a Todos!",
image: "D:/Nueva carpeta/pagina web/imagenes/Oreovaso.png",
category: "postres-en-vasos",
intro: "Una receta sencilla y deliciosa para los amantes de las Oreo, ¡perfecta para vender y disfrutar!",
ingredients: [
{
name: "Ingredientes principales",
items: ["15-20 galletas Oreo (con relleno), trituradas", "500 ml de nata para montar muy fría", "120 gr de azúcar glas", "1 cucharadita de esencia de vainilla"]
},
{
name: "Opcional",
items: ["2-3 cucharadas de dulce de leche o salsa de chocolate para capas intermedias"]
}
],
materials: ["Bol grande y muy frío", "Batidora", "Vasos individuales", "Manga pastelera (opcional)"],
steps: [
{
title: "Tritura las galletas Oreo",
description: "Coloca las galletas Oreo (con su relleno) en una bolsa con cierre hermético y tritura con un rodillo o en un procesador de alimentos hasta obtener migas gruesas. Reserva.",
image: "D:/Nueva carpeta/pagina web/imagenes/Oreotriturado.png"
},
{
title: "Prepara la crema chantilly",
description: "En un bol grande y muy frío, vierte la nata para montar bien fría. Comienza a batir a velocidad media. Cuando empiece a espesar, añade el azúcar glas poco a poco y la esencia de vainilla. Continúa batiendo hasta obtener una crema chantilly firme y con picos.",
image: "D:/Nueva carpeta/pagina web/imagenes/Oreochantilli.png"
},
{
title: "Ensambla los vasitos",
description: "En el fondo de cada vasito, coloca una capa de galletas Oreo trituradas. Con una manga pastelera o una cuchara, añade una capa generosa de crema chantilly sobre las galletas.",
image: "D:/Nueva carpeta/pagina web/imagenes/Emsamblarvasitos.png"
},
{
title: "Repite las capas y refrigera",
description: "Continúa alternando capas de galletas trituradas y crema chantilly hasta llenar el vasito, terminando con una capa de crema. Lleva los vasitos al refrigerador por al menos 2 horas.",
image: "D:/Nueva carpeta/pagina web/imagenes/Oreorefrigerado.png"
},
{
title: "Decora y sirve",
description: "Antes de servir, decora cada vasito con una mini galleta Oreo entera o trozos de galleta, y un hilo de salsa de chocolate.",
image: "D:/Nueva carpeta/pagina web/imagenes/Oreodecorarservir.png"
}
],
tips: [
"Este postre es un éxito de ventas garantizado por su popularidad",
"Para diferenciarse, ofrece una versión mini en vasitos más pequeños",
"La presentación individual siempre suma",
"No sobrebatas la nata para evitar que se corte"
],
variations: [
"Versión con chocolate: Añade cacao en polvo a la crema chantilly",
"Versión con menta: Incorpora unas gotas de esencia de menta a la crema",
"Versión con fresa: Añade una capa de mermelada de fresa entre las capas"
],
ctaText: "¿Quieres más recetas de postres con galletas?",
ctaLink: "https://go.hotmart.com/H98086971R?ap=1178"
},
{
id: 5,
title: "Postre Cremoso de Plátano y Caramelo",
subtitle: "¡La Combinación Perfecta sin Horno!",
image: "D:/Nueva carpeta/pagina web/imagenes/Platanobase.png",
category: "postres-en-vasos",
intro: "Un postre fácil, rápido y delicioso que te transportará al paraíso. ¡Ideal para tu emprendimiento dulce!",
ingredients: [
{
name: "Ingredientes principales",
items: ["160 gr de galletas de vainilla o María, trituradas", "30 gr de mantequilla sin sal, derretida", "2 plátanos medianos, maduros pero firmes, en rodajas", "300 gr de crema de leche muy fría", "35 gr de azúcar glas", "1 cucharadita de esencia de vainilla", "100 gr de dulce de leche o salsa de caramelo"]
},
{
name: "Opcional",
items: ["Un poco de canela en polvo para decorar"]
}
],
materials: ["Vasos individuales", "Bol grande y muy frío", "Batidora", "Espátula"],
steps: [
{
title: "Prepara la base de galleta",
description: "Mezcla las galletas trituradas con la mantequilla derretida hasta que se integren bien. Divide y presiona en el fondo de cada vasito. Refrigera.",
image: "D:/Nueva carpeta/pagina web/imagenes/Platanochantilli.png"
},
{
title: "Prepara la crema chantilly",
description: "En un bol muy frío, bate la crema de leche fría con el azúcar glas y la esencia de vainilla hasta obtener picos firmes.",
image: "D:/Nueva carpeta/pagina web/imagenes/Platanovasitos.png"
},
{
title: "Ensambla los vasitos",
description: "Sobre la base de galleta, coloca una capa de rodajas de plátano. Con una manga pastelera o cuchara, añade una capa de crema chantilly. Luego, vierte un hilo de dulce de leche o salsa de caramelo.",
image: "D:/Nueva carpeta/pagina web/imagenes/Platanorefrigerar.png"
},
{
title: "Repite las capas y refrigera",
description: "Alterna capas de plátano, crema y caramelo hasta llenar el vasito, terminando con una capa de crema. Refrigera los vasitos por al menos 2-3 horas.",
image: "D:/Nueva carpeta/pagina web/imagenes/platanitocaranelizado.png"
},
{
title: "Decora y sirve",
description: "Antes de servir, decora con un chorrito extra de caramelo y, si se desea, un poco de canela en polvo o unas rodajas finas de plátano.",
image: "D:/Nueva carpeta/pagina web/imagenes/Platanofinal.png"
}
],
tips: [
"Para evitar que el plátano se oxide, rocía las rodajas con un poco de jugo de limón antes de agregarlas a los vasitos",
"Usa plátanos maduros pero firmes para una mejor textura",
"El caramelo puede ser casero o comercial, según tu preferencia",
"Para un toque extra, añade nueces picadas entre las capas"
],
variations: [
"Versión con chocolate: Añade una capa de salsa de chocolate entre las capas",
"Versión con café: Incorpora un poco de café disuelto a la crema chantilly",
"Versión con nueces: Añade nueces picadas a la base de galletas o entre las capas"
],
ctaText: "¿Quieres más recetas de postres con frutas?",
ctaLink: "https://go.hotmart.com/H98086971R?ap=1178"
},
{
id: 6,
title: "Tiramisú Clásico en Vaso (Sin Huevo)",
subtitle: "¡La Elegancia Italiana Ahora Fácil y sin Horno!",
image: "D:/Nueva carpeta/pagina web/imagenes/Tiramisuclasico.png",
category: "postres-en-vasos",
intro: "Disfruta de este clásico reinventado, cremoso y delicioso. ¡Un toque gourmet para tu emprendimiento!",
ingredients: [
{
name: "Ingredientes principales",
items: ["250 gr de queso mascarpone, a temperatura ambiente", "200 ml de nata para montar muy fría", "50 gr de azúcar glas", "1 cucharadita de extracto de vainilla", "1 pizca de sal", "150-200 ml de café espresso fuerte, frío", "1 paquete de bizcochos de soletilla"]
},
{
name: "Opcional",
items: ["1 cucharada de licor Amaretto", "Cacao puro en polvo sin azúcar, para decorar"]
}
],
materials: ["Vasos individuales", "Bol grande", "Bol muy frío", "Batidora", "Espátula", "Colador para el cacao"],
steps: [
{
title: "Prepara la crema de mascarpone",
description: "En un bol grande, bate el queso mascarpone a temperatura ambiente hasta que esté suave.",
image: "D:/Nueva carpeta/pagina web/imagenes/tiramisucremamascarpone.png"
},
{
title: "Prepara la nata montada",
description: "En otro bol muy frío, bate la nata para montar fría con el azúcar glas, la vainilla y la pizca de sal hasta obtener una crema firme con picos.",
image: "D:/Nueva carpeta/pagina web/imagenes/tiramisunata.png"
},
{
title: "Combina las cremas",
description: "Con una espátula, incorpora suavemente la nata montada al queso mascarpone con movimientos envolventes hasta que la mezcla sea homogénea y aireada.",
image: "D:/Nueva carpeta/pagina web/imagenes/Tiramisucombinadas.png"
},
{
title: "Prepara el café",
description: "Mezcla el café frío con el licor Amaretto (si se usa).",
image: "D:/Nueva carpeta/pagina web/imagenes/Tiramisucafe.png"
},
{
title: "Ensambla los vasitos",
description: "Sumerge rápidamente los bizcochos de soletilla en el café (no los empapes demasiado). Coloca una capa de bizcochos remojados en el fondo de cada vasito. Añade una capa generosa de la crema de mascarpone. Repite las capas hasta llenar el vasito.",
image: "D:/Nueva carpeta/pagina web/imagenes/Tiramisuclasicovasitos.png"
},
{
title: "Refrigera y sirve",
description: "Lleva los vasitos al refrigerador por al menos 8 horas. Justo antes de servir, espolvorea generosamente la superficie con cacao puro en polvo.",
image: "D:/Nueva carpeta/pagina web/imagenes/Tiramisuclasicosinhuevo.png"
}
],
tips: [
"Para un acabado profesional, utiliza una manga pastelera con una boquilla redonda o rizada",
"No empapes demasiado los bizcochos en café para evitar que se deshagan",
"Usa café espresso de buena calidad para un sabor más intenso",
"Espolvorea el cacao justo antes de servir para mantener su color y sabor"
],
variations: [
"Versión de fresa: Añade una capa de fresas frescas",
"Versión de chocolate: Incorpora cacao a la crema o usa bizcochos de chocolate",
"Versión de limón: Sustituye el café por zumo de limón y añade ralladura de limón a la crema"
],
ctaText: "¿Quieres más recetas de postres italianos?",
ctaLink: "https://go.hotmart.com/H98086971R?ap=1178"
},
{
id: 7,
title: "Cheesecake de Zarzamora sin Horno",
subtitle: "¡Un Festín de Sabor y Color, sin Horno!",
image: "D:/Nueva carpeta/pagina web/imagenes/Cheeskakezarzamora.png",
category: "postres-en-vasos",
intro: "Sorprende con este postre vibrante y cremoso, fácil de hacer y perfecto para cualquier ocasión especial.",
ingredients: [
{
name: "Ingredientes principales",
items: ["30 galletas María, molidas", "90 gr de mantequilla, fundida", "190 gr de queso crema, a temperatura ambiente", "190 gr de Media Crema", "½ taza de Leche Condensada", "⅓ taza de Leche Evaporada", "1 cucharadita de esencia de vainilla", "7 gr de grenetina, hidratada en ¼ taza de agua y disuelta", "¾ taza de mermelada de zarzamora, molida"]
},
{
name: "Para decorar",
items: ["½ taza de zarzamoras frescas", "½ taza de frambuesas frescas", "8 hojas de menta, desinfectadas"]
}
],
materials: ["5 vasos pequeños", "Licuadora", "Bol", "Espátula"],
steps: [
{
title: "Prepara la base de galleta",
description: "Mezcla la mantequilla fundida con las galletas María molidas hasta obtener una mezcla homogénea.",
image: "D:/Nueva carpeta/pagina web/imagenes/Cheesekakegalletazarzarmora.png"
},
{
title: "Forma la base en los vasos",
description: "Distribuye esta mezcla en 5 vasos pequeños, presionando firmemente en el fondo para formar la base. Refrigera los vasos mientras se prepara el relleno.",
image: "D:/Nueva carpeta/pagina web/imagenes/vasoscheeskakezarzamora.png"
},
{
title: "Prepara la crema de cheesecake",
description: "En una licuadora, combina el queso crema a temperatura ambiente, la Media Crema, la Leche Condensada, la Leche Evaporada y la esencia de vainilla. Licúa hasta obtener una mezcla suave.",
image: "D:/Nueva carpeta/pagina web/imagenes/Cremacheesekakezarzarmora.png"
},
{
title: "Integra la grenetina",
description: "Con la licuadora encendida, agrega lentamente la grenetina disuelta hasta que se incorpore completamente a la mezcla.",
image: "D:/Nueva carpeta/pagina web/imagenes/Creatinacheeskakezarzamora.png"
},
{
title: "Rellena los vasitos",
description: "Vierte la preparación de cheesecake sobre la base de galleta en cada vaso, llenando hasta cubrir ¾ partes de la capacidad del vaso. Refrigera los vasitos por al menos 20 minutos.",
image: "D:Nueva carpeta/pagina web/imagenes/Cheeskakerellenavasitoszarzamora.png"
},
{
title: "Decora y sirve",
description: "Una vez que la crema esté ligeramente firme, decora la superficie con la mermelada de zarzamora, zarzamoras frescas, frambuesas y hojas de menta. Sirve frío.",
image: "D:/Nueva carpeta/pagina web/imagenes/Cheeskakezarzamoraservido.png"
}
],
tips: [
"La combinación de zarzamoras y frambuesas no solo es visualmente atractiva, sino que también ofrece un contraste de sabor delicioso",
"Para la venta, se puede ofrecer una versión con un pequeño toque de chocolate blanco rallado encima",
"Asegúrate de que la grenetina esté completamente disuelta para evitar grumos",
"Usa queso crema a temperatura ambiente para una mezcla más suave"
],
variations: [
"Versión con otras frutas: Sustituye la zarzamora por fresas, arándanos o mango",
"Versión con chocolate: Añade cacao en polvo a la base o chocolate derretido al relleno",
"Versión con galleta de chocolate: Usa galletas de chocolate en lugar de galletas María para la base"
],
ctaText: "¿Quieres más recetas de cheesecake sin horno?",
ctaLink: "https://go.hotmart.com/H98086971R?ap=1178"
},

{
id: 8,
title: "Mousse de Lucuma en Vasos",
subtitle: "Un sabor peruano en su máxima expresión. Delicioso, cremoso y fácil de hacer. ¡Una joya sin necesidad de horno!",
image: "D:/Nueva carpeta/pagina web/imagenes/Mouse_lucuma.png",
category: "postres-en-vasos",
intro: "Lúcuma, la fruta de los dioses peruanos, en un postre irresistible. Esta mousse es perfecta para cualquier ocasión, con su textura ligera y su sabor único y dulce. ¡Una explosión de sabor en cada cucharada!",
ingredients: [
{
name: "Para la base",
items: ["150 g de galletas de vainilla o bizcochos de soletilla",
          "50 g de mantequilla derretida"]
},
{
name: "Para el relleno",
items: ["250 g de pulpa de lúcuma congelada",
          "200 ml de leche condensada",
          "300 ml de nata para montar",
          "2 cucharaditas de gelatina sin sabor",
          "4 cucharadas de agua fría"]
},
{
name: "Para Decorar",
items: ["Cacao en polvo o chocolate rallado",
          "Hojas de menta",
          "Trocitos de galletas o almendras tostadas"]
},

],
materials: ["Vasos transparentes individuales (4-6 unidades)",
      "Batidora o procesador de alimentos",
      "Bol grande",
      "Cuchara y espátula",
      "Cazuela pequeña"],
steps: [
{
title: "Preparar la base",
description: "Tritura las galletas hasta que queden como arena gruesa. Mezcla con la mantequilla derretida. Coloca una capa en el fondo de cada vaso y presiona ligeramente.",
image: "D:/Nueva carpeta/pagina web/imagenes/base_lucuma_mouse.png"
},
{
title: "Preparar la Mousse",
description: "Hidrata la gelatina en agua fría. En una batidora, mezcla la pulpa de lúcuma con la leche condensada hasta obtener una mezcla homogénea. Aparte, calienta la gelatina hasta disolverla y agrégala a la mezcla de lúcuma. Monta la nata a punto de nieve y, con movimientos envolventes, incorpórala a la mezcla de lúcuma.",
image: "D:/Nueva carpeta/pagina web/imagenes/mouse_lucuma1.png"
},
{
title: "Preparar el montaje y Refrigeración ",
description: "Vierte la mousse de lúcuma sobre la base de galletas en los vasos. Alisa la superficie. Refrigera por al menos 4 horas o hasta que la mousse esté firme.",
image: "D:/Nueva carpeta/pagina web/imagenes/Lucumamousede.png"
},
{
title: "Decoracion final",
description: "Antes de servir, espolvorea un poco de cacao en polvo o chocolate rallado sobre la mousse. Puedes añadir hojas de menta para dar un toque de color.",
image: "D:/Nueva carpeta/pagina web/imagenes/Lucumamouseestreno.png"
},

],
tips: [
"Usa pulpa de lúcuma congelada de buena calidad para un sabor más intenso.",
      "Asegúrate de que la nata esté muy fría antes de montarla.",
      "La gelatina debe disolverse completamente para evitar grumos.",
      "Si no tienes pulpa de lúcuma, puedes usar lúcuma en polvo, ajustando la cantidad de líquido."
],
variations: [
        "Sabor chocolate: Mezcla un poco de cacao en polvo a la mousse para una versión de lúcuma con chocolate.",
        "Versión con café: Agrega una cucharadita de café instantáneo disuelto en la mousse para un toque extra.",
        "Textura crujiente: Añade trozos de galleta o almendras entre las capas de mousse.",
        "Presentación: Puedes usar copas o vasos de postre para un toque elegante."
],
ctaText: "¡Descubre más recetas como esta!",
ctaLink: "https://go.hotmart.com/H98086971R?ap=1178"
},


// Continuaría con el resto de las recetas...
// Postres Clásicos
{

},
// Postres Saludables
{

}
];

// Función para renderizar las vistas previas de recetas
function renderRecipePreviews(recipesToRender) {
const recipesContainer = document.getElementById('recipes-container');
recipesContainer.innerHTML = '';
recipesToRender.forEach(recipe => {
const recipePreview = document.createElement('div');
recipePreview.className = 'recipe-preview';
recipePreview.dataset.category = recipe.category;
recipePreview.dataset.id = recipe.id;
// Convertir categoría a texto legible
let categoryText = recipe.category.replace('-', ' ');
categoryText = categoryText.charAt(0).toUpperCase() + categoryText.slice(1);
recipePreview.innerHTML = `
<div class="recipe-image">
<img src="${recipe.image}" alt="${recipe.title}">
</div>
<div class="recipe-info">
<div class="recipe-category">${categoryText}</div>
<h3>${recipe.title}</h3>
<p>${recipe.subtitle}</p>
<a href="#" class="view-recipe-btn" data-id="${recipe.id}">Ver Receta</a>
</div>
`;
recipesContainer.appendChild(recipePreview);
});

// Añadir event listeners a los botones "Ver Receta"
document.querySelectorAll('.view-recipe-btn').forEach(btn => {
btn.addEventListener('click', function(e) {
e.preventDefault();
const recipeId = parseInt(this.dataset.id);
showRecipeDetail(recipeId);
});
});

// Añadir event listeners a las tarjetas completas
document.querySelectorAll('.recipe-preview').forEach(card => {
card.addEventListener('click', function() {
const recipeId = parseInt(this.dataset.id);
showRecipeDetail(recipeId);
});
});
}

// Función para mostrar los detalles de una receta en el modal
function showRecipeDetail(recipeId) {
const recipe = recipes.find(r => r.id === recipeId);
if (!recipe) return;

const modal = document.getElementById('recipe-modal');
const recipeDetail = document.getElementById('recipe-detail');

// Construir HTML para los ingredientes
let ingredientsHTML = '';
recipe.ingredients.forEach(group => {
ingredientsHTML += `
<div class="ingredient-group">
<h3><span>${getEmojiForGroup(group.name)}</span> ${group.name}</h3>
<ul>
${group.items.map(item => `<li>✓ ${item}</li>`).join('')}
</ul>
</div>
`;
});

// Construir HTML para los pasos
let stepsHTML = '';
recipe.steps.forEach((step, index) => {
stepsHTML += `
<div class="step">
<div class="step-number">${index + 1}</div>
<h3>${step.title}</h3>
<p>${step.description}</p>
<div class="step-image">
<img src="${step.image}" alt="${step.title}">
</div>
</div>
`;
});

// Construir HTML para los tips
let tipsHTML = '';
if (recipe.tips && recipe.tips.length > 0) {
tipsHTML = `
<div class="tips-section">
<h3><span>💡</span> Tips para un resultado perfecto</h3>
<ul>
${recipe.tips.map(tip => `<li>💡 ${tip}</li>`).join('')}
</ul>
</div>
`;
}

// Construir HTML para las variaciones
let variationsHTML = '';
if (recipe.variations && recipe.variations.length > 0) {
variationsHTML = `
<div class="variations-section">
<h3><span>🔄</span> Variaciones creativas</h3>
<ul>
${recipe.variations.map(variation => `<li>💡 ${variation}</li>`).join('')}
</ul>
</div>
`;
}

recipeDetail.innerHTML = `
<div class="recipe-detail-card">
<div class="recipe-header">
<h1>${recipe.title}</h1>
<p>${recipe.subtitle}</p>
</div>
<div class="recipe-content">
<div class="recipe-intro">
<h2>¡Un postre espectacular en minutos!</h2>
<p>${recipe.intro}</p>
</div>
<div class="recipe-ingredients">
<div class="section-title">
<span>🛒</span>
<h2>Ingredientes</h2>
</div>
<div class="ingredients-grid">
${ingredientsHTML}
</div>
</div>
<div class="recipe-materials">
<div class="section-title">
<span>🔧</span>
<h2>Materiales Necesarios</h2>
</div>
<div class="materials-list">
<ul>
${recipe.materials.map(material => `<li>✓ ${material}</li>`).join('')}
</ul>
</div>
</div>
<div class="recipe-steps">
<div class="section-title">
<span>📝</span>
<h2>Preparación Paso a Paso</h2>
</div>
<div class="steps-container">
${stepsHTML}
</div>
</div>
<div class="recipe-tips-variations">
${tipsHTML}
${variationsHTML}
</div>
<div class="recipe-cta">
<a href="${recipe.ctaLink}" target="_blank">${recipe.ctaText}</a>
</div>
</div>
</div>
`;

modal.style.display = 'block';
document.body.style.overflow = 'hidden'; // Evitar scroll en el fondo
}

// Función para obtener emoji según el grupo de ingredientes
function getEmojiForGroup(groupName) {
const emojiMap = {
"Para la base": "🍪",
"Para el relleno": "🧀",
"Para la cubierta": "🍓",
"Para decorar": "✨",
"Ingredientes principales": "🥄",
"Opcional": "🔘",
"Para la crema": "🥛",
"Para el montaje": "📋"
};
return emojiMap[groupName] || "📝";
}

// Función para filtrar recetas por categoría
function filterByCategory(category) {
if (category === 'todos') {
renderRecipePreviews(recipes);
} else {
const filteredRecipes = recipes.filter(recipe => recipe.category === category);
renderRecipePreviews(filteredRecipes);
}
}

// Función para buscar recetas
function searchRecipes(query) {
const filteredRecipes = recipes.filter(recipe => {
const titleMatch = recipe.title.toLowerCase().includes(query.toLowerCase());
const subtitleMatch = recipe.subtitle.toLowerCase().includes(query.toLowerCase());
const introMatch = recipe.intro.toLowerCase().includes(query.toLowerCase());
return titleMatch || subtitleMatch || introMatch;
});
renderRecipePreviews(filteredRecipes);
}

// Event listeners para los filtros de categoría
document.querySelectorAll('.filter-btn').forEach(btn => {
btn.addEventListener('click', function() {
// Actualizar botón activo
document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
this.classList.add('active');

// Filtrar recetas
const category = this.dataset.category;
filterByCategory(category);
});
});

// Event listener para el buscador
document.getElementById('search-btn').addEventListener('click', function() {
const query = document.getElementById('search-input').value;
searchRecipes(query);
});

document.getElementById('search-input').addEventListener('keyup', function(event) {
if (event.key === 'Enter') {
const query = this.value;
searchRecipes(query);
}
});

// Menú móvil
const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const nav = document.querySelector('nav');
mobileMenuBtn.addEventListener('click', function() {
nav.classList.toggle('active');
});

// Modal
const modal = document.getElementById('recipe-modal');
const closeModalBtn = document.querySelector('.close-modal');
closeModalBtn.addEventListener('click', function() {
modal.style.display = 'none';
document.body.style.overflow = 'auto'; // Restaurar scroll
});

window.addEventListener('click', function(event) {
if (event.target === modal) {
modal.style.display = 'none';
document.body.style.overflow = 'auto'; // Restaurar scroll
}
});

// Smooth scrolling para enlaces de navegación
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
anchor.addEventListener('click', function(e) {
e.preventDefault();
const targetId = this.getAttribute('href');
const targetSection = document.querySelector(targetId);
if (targetSection) {
window.scrollTo({
top: targetSection.offsetTop - 70,
behavior: 'smooth'
});

// Cerrar menú móvil si está abierto
if (nav.classList.contains('active')) {
nav.classList.remove('active');
}
}
});
});

// Renderizar todas las recetas al cargar la página
renderRecipePreviews(recipes);
});