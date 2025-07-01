import Head from "next/head";

const SalimovHead = () => {
  return (
    <Head>
      <title>Zgradica - Sustav za pametno upravljanje zgradama | Laus Deo</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      
      {/* SEO Meta Tags */}
      <meta 
        name="description" 
        content="Zgradica omogućava transparentno upravljanje zgradama kroz sigurno glasovanje, komunikaciju stanara i vlastiti webshop. Idealno za predstavnike stanara i upravljačke tvrtke." 
      />
      <meta 
        name="keywords" 
        content="upravljanje zgradama, predstavnik stanara, glasovanje stanara, komunikacija u zgradi, transparentno upravljanje, webshop za stanare, Laus Deo, Zgradica" 
      />
      <meta name="author" content="Laus Deo d.o.o" />
      <meta name="robots" content="index, follow" />
      
      {/* Open Graph Meta Tags */}
      <meta property="og:title" content="Zgradica - Sustav za pametno upravljanje zgradama" />
      <meta property="og:description" content="Transparentno upravljanje zgradama kroz sigurno glasovanje, komunikaciju stanara i vlastiti webshop." />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://www.zgradica.hr" />
      <meta property="og:image" content="https://www.zgradica.hr/assets/og-image.jpg" />
      
      {/* Template Google Fonts */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
      <link
        href="https://fonts.googleapis.com/css2?family=Livvic:wght@100;200;300;400;500;600;700&family=Oswald:wght@400;500;600;700&display=swap"
        rel="stylesheet"
      />
      {/* Favicon */}
      <link rel="icon" href="/favicon.ico" />
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />

      {/* Template CSS Files */}
      <link rel="stylesheet" href="css/devicon.min.css" />
      <link rel="stylesheet" href="css/all.min.css" />
      <link rel="stylesheet" href="css/bootstrap.min.css" />
      <link rel="stylesheet" href="css/swiper-bundle.min.css" />
      <link rel="stylesheet" href="css/animate.min.css" />
      <link rel="stylesheet" href="css/jquery.mCustomScrollbar.min.css" />
      <link rel="stylesheet" href="css/style.css" />
      
      {/* CSS Skin File */}
      <link rel="stylesheet" href="css/skins/blue.css" />
      
      <link rel="stylesheet" type="text/css" href="css/styleswitcher.css" />
    </Head>
  );
};

export default SalimovHead;