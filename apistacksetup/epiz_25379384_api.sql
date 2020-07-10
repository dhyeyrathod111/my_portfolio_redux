-- phpMyAdmin SQL Dump
-- version 4.9.0.1
-- https://www.phpmyadmin.net/
--
-- Host: sql211.epizy.com
-- Generation Time: Jul 05, 2020 at 08:58 AM
-- Server version: 5.6.47-87.0
-- PHP Version: 7.2.22

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `epiz_25379384_api`
--

-- --------------------------------------------------------

--
-- Table structure for table `contact_us`
--

CREATE TABLE `contact_us` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `contact_number` varchar(255) NOT NULL,
  `messsage` text NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `contact_us`
--

INSERT INTO `contact_us` (`id`, `name`, `email`, `contact_number`, `messsage`, `created_at`, `updated_at`) VALUES
(4, 'Pearl Workman', 'colimiwy@yopmail.com', 'Vel mollitia aut deb', 'Enim totam fugiat si', '2020-03-24 16:25:53', '2020-03-24 16:25:53'),
(5, 'hello', 'dhyey@yopmail.com', '9967313968', 'asdadsa asdasd', '2020-03-25 03:12:50', '2020-03-25 03:12:50'),
(6, 'Aspen Horne', 'rutiwinyto@yopmail.com', 'Eligendi a dolore di', 'Id non itaque placea', '2020-03-25 03:34:17', '2020-03-25 03:34:17'),
(7, 'Margaret Patterson', 'rotewesof@yopmail.com', 'Hic recusandae Est', 'Sint reprehenderit', '2020-03-25 03:47:39', '2020-03-25 03:47:39'),
(8, 'Philip Church', 'cacevo@yopmail.com', 'Laboris commodo duci', 'Dolor dolor labore v', '2020-03-25 03:49:20', '2020-03-25 03:49:20'),
(9, 'Moses Davenport', 'lotonimu@yopmail.com', 'Est tempora vel dolo', 'Rem sunt facilis est', '2020-03-25 03:57:48', '2020-03-25 03:57:48'),
(10, 'Kellie Mathews', 'zedoby@yopmail.com', 'Sit veniam quaerat', 'Nesciunt nulla qui', '2020-03-25 03:58:47', '2020-03-25 03:58:47'),
(11, 'Phillip Ferrell', 'famogukyr@yopmail.com', 'Consequatur eaque eu', 'Modi et dolores ipsa', '2020-03-25 04:00:21', '2020-03-25 04:00:21'),
(12, 'Wang Roman', 'ryfove@yopmail.com', 'Illum sint quis ab', 'Voluptates ullam cul', '2020-03-25 04:01:50', '2020-03-25 04:01:50'),
(13, 'Clare Webb', 'cujivevu@yopmail.com', 'Quod mollitia quaera', 'Eius eos vitae veli', '2020-03-25 04:06:40', '2020-03-25 04:06:40'),
(14, 'Kirk James', 'titocova@yopmail.com', 'Excepteur debitis si', 'Maiores non aut volu', '2020-03-25 07:08:47', '2020-03-25 07:08:47'),
(15, 'Stephen Dennis', 'wepilate@yopmail.com', 'Animi minim minus n', 'Officia sit eu et es', '2020-03-25 07:33:04', '2020-03-25 07:33:04'),
(16, 'Alfreda Snow', 'sypodatot@yopmail.com', 'Dicta reprehenderit', 'Excepteur dolorum si', '2020-03-25 07:33:30', '2020-03-25 07:33:30'),
(17, 'Rylee Kennedy', 'lepyvi@yopmail.com', 'Elit laborum Sed d', 'Eaque modi fugiat p', '2020-03-25 07:34:11', '2020-03-25 07:34:11'),
(18, 'Alexa Whitney', 'nase@yopmail.com', 'Odio aut qui ipsum', 'Illum magnam animi', '2020-03-25 07:51:49', '2020-03-25 07:51:49'),
(19, 'Alexa Whitney', 'nase@yopmail.com', 'Odio aut qui ipsum', 'Illum magnam animi', '2020-03-25 07:52:03', '2020-03-25 07:52:03'),
(20, 'Alexa Whitney', 'nase@yopmail.com', 'Odio aut qui ipsum', 'Illum magnam animi', '2020-03-25 07:52:26', '2020-03-25 07:52:26'),
(21, 'Ignacia Waller', 'rewose@yopmail.com', 'Lorem maxime ipsum m', 'Incididunt consequat', '2020-03-25 07:52:53', '2020-03-25 07:52:53'),
(22, 'Ignacia Waller', 'rewose@yopmail.com', 'Lorem maxime ipsum m', 'Incididunt consequat', '2020-03-25 07:52:54', '2020-03-25 07:52:54'),
(23, 'Chloe Wade', 'xysedyk@yopmail.com', 'Odio quasi nulla est', 'Cupiditate obcaecati', '2020-03-25 07:53:18', '2020-03-25 07:53:18'),
(24, 'Chloe Wade', 'xysedyk@yopmail.com', 'Odio quasi nulla est', 'Cupiditate obcaecati', '2020-03-25 07:53:20', '2020-03-25 07:53:20'),
(25, 'Chloe Wade', 'xysedyk@yopmail.com', 'Odio quasi nulla est', 'Cupiditate obcaecati', '2020-03-25 07:53:20', '2020-03-25 07:53:20'),
(26, 'Cooper Rasmussen', 'pavafavizi@yopmail.com', 'Dolor sapiente ut en', 'Qui dolor iusto dolo', '2020-03-25 07:55:53', '2020-03-25 07:55:53'),
(27, 'Kameko Marshall', 'qejage@yopmail.com', 'Et do dolorem adipis', 'Fugiat lorem reprehe', '2020-03-25 08:01:05', '2020-03-25 08:01:05'),
(28, 'Zena Sherman', 'lahy@yopmail.com', 'Officia error dolor', 'Est ipsum odit eum', '2020-03-25 08:24:27', '2020-03-25 08:24:27'),
(29, 'Chase Peters', 'viqy@yopmail.com', 'Aliquip fugiat rati', 'Maxime voluptas amet', '2020-03-25 08:34:51', '2020-03-25 08:34:51'),
(30, 'Sandra Reese', 'kyxebimezo@yopmail.com', 'Rerum ea quis possim', 'Similique magnam Nam', '2020-03-25 08:36:31', '2020-03-25 08:36:31'),
(31, 'Garrett Coleman', 'kygoca@yopmail.com', 'Quos qui pariatur D', 'Ut dolore vitae est', '2020-03-25 09:08:26', '2020-03-25 09:08:26'),
(32, 'Felicia Glenn', 'fifeky@yopmail.com', 'Eligendi ut iusto co', 'Aut cillum quaerat e', '2020-03-25 16:42:16', '2020-03-25 16:42:16'),
(33, 'Serina Paul', 'pigaryl@yopmail.com', 'Sint quod suscipit a', 'Assumenda optio fug', '2020-03-25 16:42:33', '2020-03-25 16:42:33');

-- --------------------------------------------------------

--
-- Table structure for table `migrations`
--

CREATE TABLE `migrations` (
  `id` int(10) UNSIGNED NOT NULL,
  `migration` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `batch` int(11) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `migrations`
--

INSERT INTO `migrations` (`id`, `migration`, `batch`) VALUES
(1, '2014_10_12_000000_create_users_table', 1),
(2, '2014_10_12_100000_create_password_resets_table', 1),
(3, '2020_03_19_202218_create_projects_table', 1),
(4, '2020_03_23_083854_create_skills_table', 1);

-- --------------------------------------------------------

--
-- Table structure for table `password_resets`
--

CREATE TABLE `password_resets` (
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `projects`
--

CREATE TABLE `projects` (
  `id` int(11) NOT NULL,
  `title` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `file_name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `website_url` varchar(1000) COLLATE utf8mb4_unicode_ci NOT NULL,
  `description` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `projects`
--

INSERT INTO `projects` (`id`, `title`, `file_name`, `website_url`, `description`, `created_at`, `updated_at`) VALUES
(1, 'PT-DB', 'project_images/ad0ba577b1712d93fd194cd9d944958a.png', 'https://www.pt-db.com/', '', '2020-04-14 14:31:17', '2020-04-15 08:07:14'),
(2, 'Slickdine', 'project_images/84ce30544b0a59f4fb3cb8f233948596.png', 'https://betasite.online/slickdine/in/mumbai/en', '', '2020-04-14 14:33:26', '2020-04-15 08:07:14'),
(3, 'Estimatingsolutions', 'project_images/a7d225e6084d6c12852400334c81a8d0.png', 'https://app.estimatingsolutions.com.au/member-login', '', '2020-04-14 14:40:30', '2020-04-15 08:07:14'),
(4, 'Travel memory', 'project_images/c05e2e4b86dbf815273883b15a6aca28.png', 'http://php.betadelivery.com/travel', '', '2020-04-14 14:47:34', '2020-04-15 08:07:14'),
(5, '48fitness', 'project_images/75ab23aaff393a4b998d38e6bf9a7092.png', 'http://48fitness.in/', '', '2020-04-14 14:50:56', '2020-04-15 08:07:14'),
(6, 'cashgw', 'project_images/53529d0d52e94418a4a1240384cf662b.png', 'https://cashgw.website/', '', '2020-04-28 10:09:36', '2020-05-20 13:48:49'),
(7, 'Repairwalacenter', 'project_images/d9806c1fbba381f83219fcdd4de87611.png', 'http://www.repairwalacenter.com/', '', '2020-05-20 13:41:32', '2020-05-20 13:48:49'),
(8, 'Samspacenter', 'project_images/ec419961cbcec73431bb06da0b5d0830.png', 'http://samspacenter.net/', '', '2020-05-20 13:42:38', '2020-05-20 13:48:49'),
(9, 'Simsimshops', 'project_images/df815c2a696eae016fb9c202350ca68e.png', 'https://simsimshops.com/', '', '2020-05-20 13:43:46', '2020-05-20 13:48:49'),
(10, 'Organichealthplanet', 'project_images/460622fc5ccc64c66af82ac9c32b80b2.png', 'https://organichealthplanet.com/', '', '2020-05-20 13:45:24', '2020-05-20 13:48:49'),
(11, 'Slotmachine', 'project_images/b452c3990063891e0c8549fef13ecfc5.png', 'http://dhyeyrathod.atspace.cc/', 'This is my assignment project based on Laravel.', '2020-06-16 15:36:09', NULL),
(12, 'packersandmovers', 'project_images/5ea893b59529b609ac6f5fd839cc964d.png', 'http://packersandmovers.epizy.com/', 'This is a Codeigniter based website.', '2020-06-16 15:39:42', NULL),
(13, 'gopoco', 'project_images/fa4ac0a2bebca479f4e7f26588ec4fca.png', 'https://gopoco.us/', 'Blog', '2020-07-01 16:32:57', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `skills`
--

CREATE TABLE `skills` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `skills_name` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `descriptions` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `lavel` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `image` varchar(500) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `skills`
--

INSERT INTO `skills` (`id`, `skills_name`, `descriptions`, `lavel`, `created_at`, `updated_at`, `image`) VALUES
(1, 'Laravel', 'I practice Laravel for the last 8 months. I think this is the best framework for PHP. Laravel is an open-source PHP framework, which is robust and easy to understand. It follows a model-view-controller design pattern. Laravel reuses the existing components of different frameworks which helps in creating a web application. The web application thus designed is more structured and pragmatic. Laravel offers a rich set of functionalities that incorporates the basic features of PHP frameworks like CodeIgniter, Yii and other programming languages like Ruby on Rails. Laravel has a very rich set of features that will boost the speed of web development. If you are familiar with Core PHP and Advanced PHP, Laravel will make your task easier. It saves a lot of time if you are planning to develop a website from scratch. Moreover, a website built in Laravel is secure and prevents several web attacks.', '40', NULL, NULL, 'skill_images/4d3cca5693a937646a5067ba686800e6.jpg'),
(2, 'Codeigniter', 'I practice Codeigniter for the last 1 year. Codeigniter is the easiest framework in PHP. I learn the first framework of PHP is Codeigniter. I create so many projects in Codeigniter. CodeIgniter is a powerful PHP framework with a very small footprint, built for developers who need a simple and elegant toolkit to create full-featured web applications. CodeIgniter was created by EllisLab and is now a project of the British Columbia Institute of Technology. For building a web application we have to spend a lot of time writing the same code again and again. Codeigniter provides you a starting block and minimizes the amount of code needed to build a website.CodeIgniter contains libraries, simple interface and logical structure to access these libraries, plug-ins, helpers and some other resources which solve the complex functions of PHP more easily maintaining high performance. It simplifies the PHP code and brings out a fully interactive, dynamic website at a much shorter time. It supports PHP version of 5.2.6 or newer and MySQL version 4.1 or newer. It makes your web more robust and your code easier to read and maintain. It is a free toolkit, lightweight and easier to install.', '90', NULL, NULL, 'skill_images/8a2a3cad8ae25b72bf6ddc8e94d27581.png'),
(3, 'React', 'I practice React for the last 6 months. React is the best frontend technology for developed web applications and websites. React is the most popular front-end JavaScript library in the field of web development. It is used by large, established companies and newly-minted startups alike (Netflix, Airbnb, Instagram, and the New York Times, to name a few). React brings many advantages to the table, making it a better choice than other frameworks like Angular.js. It is an open-source, component-based, front-end library responsible only for the application’s view layer. In Model View Controller (MVC) architecture, the view layer is responsible for how the app looks and feels. React was created by Jordan Walke, a software engineer at Facebook. ', '40', NULL, NULL, 'skill_images/abb1d44614a3611a28e897303caa2636.jpg'),
(4, 'PHP', 'I started my IT career with the PHP programing language. it\'s very easy to learn and understand.PHP stands for Hypertext Preprocessor. It\'s an open-source, server-side, scripting language used for the development of web applications. By scripting language, we mean a program that is script-based (lines of code) written for the automation of tasks.PHP can be embedded in HTML, and it\'s well suited for web development and the creation of dynamic web pages for web applications, e-commerce applications, and database applications. It\'s considered a friendly language with abilities to easily connect with MySQL, Oracle, and other databases.PHP scripts can be used on most of the well-known operating systems like Linux, Unix, Solaris, Microsoft Windows, MAC OS, and many others. It also supports most web servers including Apache and IIS. Using PHP affords web developers the freedom to choose their operating system and the webserver.', '70', NULL, NULL, 'skill_images/2851be693a6c2c2630264dfe0fa51f42.jpg'),
(5, 'Jquery', 'Till now I experience JQuery It\'s really awesome and fantastic. I learn jquery from the last 2 years. jQuery is a fast, small, and feature-rich JavaScript library. It makes things like HTML document traversal and manipulation, event handling, animation, and Ajax much simpler with an easy-to-use API that works across a multitude of browsers. With a combination of versatility and extensibility, jQuery has changed the way that millions of people write JavaScript.jQuery is a small, light-weight and fast JavaScript library. It is cross-platform and supports different types of browsers. It is also referred to as? write less do more? because it takes a lot of common tasks that require many lines of JavaScript code to accomplish and binds them into methods that can be called with a single line of code whenever needed. It is also very useful to simplify a lot of the complicated things from JavaScript, like AJAX calls and DOM manipulation.', '70', NULL, NULL, 'skill_images/574f90cfc4bd2f2da518013c9a6e6069.jpeg'),
(7, 'SQL Database', 'I practice in SQL for the last 2 years. SQL stands for Structured Query Language. A query language is a kind of programming language that\'s designed to facilitate retrieving specific information from databases, and that\'s exactly what SQL does. To put it simply, SQL is the language of databases. That matters because most companies store their data in databases. And while there are many types of databases (like MySQL, PostgreSQL, Microsoft SQL Server), most of them speak SQL, so once you\'ve got SQL basics under your belt, you\'ll be able to work with any of them. Even if you\'re planning to do your analysis with another language like Python, at most companies, chances are you\'ll need to use SQL to retrieve the data you need from the company\'s database. As of this writing, there are more than 80,000 SQL jobs listed on Indeed in the US alone.', '70', NULL, NULL, 'skill_images/92b022c42964e8e8d852888773963306.jpg');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(10) UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email_verified_at` timestamp NULL DEFAULT NULL,
  `password` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `remember_token` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `name`, `email`, `email_verified_at`, `password`, `remember_token`, `created_at`, `updated_at`) VALUES
(1, 'Len Sellers', 'dhyeyrathod@yopmail.com', NULL, 'Test@123', NULL, '2020-03-23 03:25:55', '2020-03-23 03:25:55');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `contact_us`
--
ALTER TABLE `contact_us`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `migrations`
--
ALTER TABLE `migrations`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `password_resets`
--
ALTER TABLE `password_resets`
  ADD KEY `password_resets_email_index` (`email`(250));

--
-- Indexes for table `projects`
--
ALTER TABLE `projects`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `skills`
--
ALTER TABLE `skills`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `projects`
--
ALTER TABLE `projects`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- AUTO_INCREMENT for table `skills`
--
ALTER TABLE `skills`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
