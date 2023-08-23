-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Tempo de geração: 23/08/2023 às 17:06
-- Versão do servidor: 10.4.28-MariaDB
-- Versão do PHP: 8.0.28

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Banco de dados: `techmartapi`
--

-- --------------------------------------------------------

--
-- Estrutura para tabela `announcements`
--

CREATE TABLE `announcements` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `id_user` int(11) NOT NULL,
  `title` varchar(255) NOT NULL,
  `category` int(11) NOT NULL DEFAULT 0,
  `description` text NOT NULL DEFAULT '0',
  `price` varchar(255) NOT NULL,
  `zipcode` varchar(50) NOT NULL,
  `images` varchar(255) NOT NULL,
  `created_at` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Despejando dados para a tabela `announcements`
--

INSERT INTO `announcements` (`id`, `id_user`, `title`, `category`, `description`, `price`, `zipcode`, `images`, `created_at`) VALUES
(13, 1, 'Mac Book pro ultima geração', 4, 'Procesador i7, 16gb RAM 500gb SSD', '15.000', '08412030', '6c5b5db5f21fd7bad33483760a8341d2.jpg', '2020-11-02 02:12:05'),
(17, 3, 'Headset Gamer HyperX Cloud III, DTS, Drivers 53mm', 10, 'Headset Gamer HyperX Cloud III\r\n \r\n\r\nSinta a diferença do HyperX nos detalhes, como nossa exclusiva espuma viscoelástica, couro sintético premium, distribuição de peso e força de aperto. Uma experiência mais confortável é alcançada com o ajuste desses fatores. Isso faz uma enorme diferença durante as sessões de jogos mais longas ou sempre que o headset for usado por longos períodos.\r\n\r\n \r\n\r\nImersão no áudio\r\n \r\n\r\nÉ possível alternar para 7.1 a fim de obter melhor localização por áudio e uma sensação ampliada de espaço. Ouça os sons impactantes dos seus jogos com nitidez e precisão. Drivers de 53 mm especialmente sintonizados permitem que você entre no mundo dos jogos ou se concentre em importantes trechos de áudio.\r\n\r\n \r\n\r\nMicrofone removível com cancelamento de ruído: mantenha as comunicações claras e reduza o ruído ambiente para não prejudicar sua conversa por voz.', '599,99', '123456', 'cf20a6aac04e697bfac08e0448ad8b49.jpg', '2023-08-21 15:38:55'),
(18, 3, 'Monitor Gamer LG UltraGear 27 Full HD, 144Hz, 1ms, IPS', 7, 'Monitor Gamer LG UltraGear 27\" Full HD\r\n \r\n\r\nMude o jogo\r\nComplete seu setup gamer com o monitor LG Ultragear. Desenvolvido para o gamer raíz, com os recursos mais avançados e um design eletrizante que garantem uma experiência imersiva. Com tempo de resposta de 1ms REAL (GtG), taxa de atualização de 144Hz e um painel IPS com cores muito mais vivas, você terá tudo o que precisa para mudar o jogo.\r\n \r\n\r\nProjetado para a mais alta performance\r\n\r\nCom uma tela IPS 1ms real (GtG) comparável à velocidade TN Speed, o monitor gamer LG UltraGear fornece uma imagem clara e nítida com o melhor tempo de resposta, elevando seu desempenho para outro patamar\r\n\r\n \r\n\r\nJogabilidade fluida com frames instantâneos\r\n\r\nUma velocidade ultrarrápida de 144Hz permite que os jogadores vejam o próximo quadro rapidamente e reajam imediatamente aos seus adversários mudando a história do jogo em busca da vitória.\r\n\r\n \r\n\r\n', '1.299,99', '123456', 'ecac52b7ab7e5d1a00c2b125f5666646.jpg', '2023-08-21 15:42:12'),
(19, 3, 'Smartphone Samsung Galaxy S20 FE, 5G, 128GB, 6GB RAM, Octa Core', 4, 'Smartphone Samsung Galaxy S20 FE 5G 128GB\r\n \r\n\r\nEste é o smartphone para pessoas que querem tudo. Ouvimos vocês, os fãs, e agora não precisam mais ficar em dúvida sobre o que escolher. Este é o smartphone feito sob medida para fãs de todos os tipos. Então, se você é fã de fotografia, jogos ou adora deixar seu feed repleto de tudo que o inspira, nós reunimos a combinação definitiva de inovação S20. Este é o smartphone que oferece o que você deseja, para você fazer mais daquilo que ama.\r\n\r\n \r\n\r\nA Câmera de Lente Tripla de Nível Profissional\r\nA câmera de lente tripla de nível profissional permite que você tire aquela foto profissional digna de #semfiltro com facilidade. Enquadre a cena com a câmera wide e, a seguir, mostre ainda mais com a câmera ultra-wide, ou aumente o zoom com o zoom óptico de 3x na câmera teleobjetiva.\r\n\r\n \r\n\r\nConectividade\r\nO LTE de até 1,6 Gbps oferece velocidades de dados poderosas, enquanto o Wi-Fi 6 conecta você com segurança e baixa latência, mesmo em um local lotado. Portanto, quer você esteja conectado a LTE ou Wi-Fi, pode jogar em tempo real com pouco atraso.\r\n\r\n \r\n\r\nBateria Inteligente o Dia Todo para que Você possa Jogar por Horas\r\nViva sua vida sem se preocupar com onde você pode conectar seu smartphone. A bateria de 4500mAh (padrão) dá ao seu smartphone a energia necessária para durar mais que o seu dia, e é inteligente o suficiente para economizar energia para quando você realmente precisar.\r\n\r\n \r\n\r\nEspaço para Milhares de Fotos e Vídeos\r\nCom 128 GB integrados e a capacidade de armazenar até 1 TB (não incluso) a mais em um cartão microSD, o único limite para o que você pode armazenar é o que você pode criar e baixar.', '1.804,99', '123456', '53c053787cbd0a93101c56041d1498bd.jpg', '2023-08-21 15:44:47'),
(20, 3, 'Notebook Acer Aspire 5, Intel Core I7, Memória RAM 8GB, SSD 512GB', 9, 'Suas tarefas com mais fluidez!\r\nOs notebooks da linha Aspire 5 são convenientemente portáteis e elegantes para acompanhar suas tarefas do dia a dia. Os recursos tecnológicos de sua confiança ao seu lado sempre que precisar. Desempenho suficiente para todas as tarefas, com Processador Intel® Core™ 11ª geração. Você cria, edita, compartilha e assiste vídeos, fotos e imagens sem dificuldades. Agora com Windows 11O Aspire 5 vem equipado com o sistema operacional Windows 11 que entrega um visual mais moderno e intuitivo, além de oferecer os mais diversos benefícios ao seu notebook.\r\n', '3.799,05', '123456', '04dbf18032502bea1dd2bf4867af8535.jpg', '2023-08-21 15:48:52'),
(21, 3, 'Mouse Gamer HyperX Pulsefire Surge RGB 16000 DPI - 4P5Q1AA', 10, 'Mouse para jogos HyperX Pulsefire Surge RGB\r\nOferece aos jogadores o melhor em estilo e conteúdo, oferecendo extrema precisão graças a seu sensor Pixart 3389 e efeitos de iluminação RGB espetaculares em 360° com seu exclusivo anel de luzes. O Pulsefire Surge possui configurações DPI nativas até 16.000 DPI para uma precisão que vai satisfazer até os gamers mais exigentes. Switches Omron com capacidade para 50 milhões de cliques asseguram que assim que você tenha aquele tiro na mira, seu clique será registrado. Personalize o DPI do mouse, defina cores de LED individualizadas, atribua macros e salve diretamente no seu mouse com o software HyperX NGenuity. O Pulsefire Surge também vem equipado com grandes skates para permitir um deslizar suave e controlado.', '109,99', '123456', '88149944376c0d7c068031ba681c8f35.jpg', '2023-08-21 18:45:51');

-- --------------------------------------------------------

--
-- Estrutura para tabela `categories`
--

CREATE TABLE `categories` (
  `id` int(10) UNSIGNED NOT NULL DEFAULT 0,
  `name` varchar(255) NOT NULL,
  `covercategory` varchar(255) NOT NULL DEFAULT 'default.png'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Despejando dados para a tabela `categories`
--

INSERT INTO `categories` (`id`, `name`, `covercategory`) VALUES
(4, 'Celulares e Smartphones', 'eletronicos.png'),
(6, 'Games', 'videogame.png'),
(7, 'TVs', 'monitor.png'),
(8, 'Tablets e iPads', 'tablet.png'),
(9, 'Computadores', 'pc.png'),
(10, 'Periféricos', 'fone.png');

-- --------------------------------------------------------

--
-- Estrutura para tabela `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `name` varchar(200) NOT NULL,
  `email` varchar(200) NOT NULL,
  `phone` varchar(50) NOT NULL DEFAULT '0',
  `city` varchar(50) NOT NULL,
  `password` varchar(200) NOT NULL,
  `token` varchar(200) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Despejando dados para a tabela `users`
--

INSERT INTO `users` (`id`, `name`, `email`, `phone`, `city`, `password`, `token`) VALUES
(1, 'Admin', 'admin@gmail.com', '43912312312', 'São Paulo', '$2y$10$EaMq8ug7Jd6qLtO270UIDulFZtIn45W3Rwkk5FwPsYCm1hZb0aBVS', NULL),
(3, 'Maria', 'maria@hotmail.com', '123456', 'São Paulo', '$2y$10$80AuqOe2kAhELXqjI6TOUO/5wb7zVFH3p.H/bLPhfgsKdkEGWJs6a', NULL),
(4, 'Arthur', 'fsdfsdfsdfsdf@hotmail.com', '34312445', 'São Paulo', '$2y$10$DhhUdXryiLM/djvrpkuqVuYIlVMBlFmfhoLe2zyHeKQXFrUQXeGGy', NULL);

--
-- Índices para tabelas despejadas
--

--
-- Índices de tabela `announcements`
--
ALTER TABLE `announcements`
  ADD PRIMARY KEY (`id`);

--
-- Índices de tabela `categories`
--
ALTER TABLE `categories`
  ADD PRIMARY KEY (`id`);

--
-- Índices de tabela `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT para tabelas despejadas
--

--
-- AUTO_INCREMENT de tabela `announcements`
--
ALTER TABLE `announcements`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=23;

--
-- AUTO_INCREMENT de tabela `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
