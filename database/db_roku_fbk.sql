-- phpMyAdmin SQL Dump
-- version 4.7.9
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Generation Time: Feb 01, 2019 at 06:05 PM
-- Server version: 5.7.21
-- PHP Version: 7.1.16

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `db_roku_fbk`
--

-- --------------------------------------------------------

--
-- Table structure for table `tbl_category`
--

DROP TABLE IF EXISTS `tbl_category`;
CREATE TABLE IF NOT EXISTS `tbl_category` (
  `cat_id` tinyint(3) UNSIGNED NOT NULL AUTO_INCREMENT,
  `cat_name` varchar(80) NOT NULL,
  PRIMARY KEY (`cat_id`)
) ENGINE=InnoDB AUTO_INCREMENT=31 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `tbl_category`
--

INSERT INTO `tbl_category` (`cat_id`, `cat_name`) VALUES
(1, 'action'),
(2, 'comedy'),
(3, 'family'),
(4, 'sci-fi'),
(5, 'war'),
(6, 'crime'),
(7, 'horror'),
(8, 'fantasy'),
(9, 'western'),
(10, 'sport'),
(11, 'news'),
(12, 'animation'),
(13, 'documentary'),
(14, 'musical'),
(15, 'talk-show'),
(16, 'Romace'),
(17, 'drama'),
(18, 'blues'),
(19, 'classical'),
(20, 'electronical'),
(21, 'jazz'),
(22, 'rock'),
(23, 'pop'),
(24, 'metal'),
(25, 'dance'),
(26, 'ambient'),
(27, 'alternative'),
(28, 'orchestra'),
(29, 'soundtrack'),
(30, 'world');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_movie`
--

DROP TABLE IF EXISTS `tbl_movie`;
CREATE TABLE IF NOT EXISTS `tbl_movie` (
  `movie_id` smallint(5) UNSIGNED NOT NULL AUTO_INCREMENT,
  `movie_title` varchar(180) NOT NULL,
  `movie_desc` varchar(255) NOT NULL,
  `movie_year` year(4) NOT NULL,
  `movie_img` varchar(255) NOT NULL,
  `movie_certificate` varchar(80) NOT NULL,
  `movie_switch` tinyint(1) NOT NULL DEFAULT '1',
  `movie_link` varchar(255) NOT NULL,
  PRIMARY KEY (`movie_id`)
) ENGINE=InnoDB AUTO_INCREMENT=41 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `tbl_movie`
--

INSERT INTO `tbl_movie` (`movie_id`, `movie_title`, `movie_desc`, `movie_year`, `movie_img`, `movie_certificate`, `movie_switch`, `movie_link`) VALUES
(1, 'I Confess', 'A priest, who comes under suspicion for murder, cannot clear his name without breaking the seal of the confessional.', 1953, 'i_confess.jpg', 'R', 1, 'https://www.youtube.com/watch?v=NiajVY-f99s'),
(2, 'The Bloody Brood', 'Two beatniks get their kicks by dealing drugs and violence.', 1959, 'bloody_brood.jpg', 'R', 1, 'https://www.youtube.com/watch?v=Sjoy-VJ2uyA'),
(3, 'Wolf Dog', 'Just paroled from a prison term for manslaughter, ex-Marine Jim Hughes makes a new start with his wife Ellen and ten-year-old son Paul, on a ranch given him by his old Corps commander. Krivak, a vicious neighbor, threatens to take the land away from him a', 1958, 'wolf_dog.jpg', '18A', 1, 'https://www.youtube.com/watch?v=XHoS_bCdIqM'),
(4, 'A Dangerous Age', 'Teenage lovers are continually thwarted in their attempts to get married.', 1957, 'dangerous_age.jpg', 'R', 1, 'https://www.youtube.com/watch?v=mbPPx06cIdk'),
(5, 'Huckleberry Hound Sheep Shape Sheepherder', 'Huckleberry Hound first showed up in 1957 and in 1958, The Huckleberry Hound Show was syndicated. In 1961, it won the first Emmy award given to an animated show.  Huckleberry Hound was a blue dog with a Southern drawl and he was voiced by Daws Butler. His', 1957, 'huckleberry.jpg', 'G', 1, 'https://www.youtube.com/watch?v=q4OBKXt741U'),
(6, 'Pluto\'s Housewarming', 'Pluto\'s brand new beach house is invaded by a wandering turtle, and then Butch the Bulldog, who are both looking for new homes of their own.', 1950, 'pluto.jpg', 'G', 1, 'https://www.youtube.com/watch?v=eI1ZJFErPYI'),
(7, 'Donald Duck Donald\'s Snow Fight', 'The short begins with Donald wiping the fog off his glass door, excited to see the snow. Wearing a fur overcoat, Donald goes out to play with a sled while singing Jingle Bells. When Donald reaches the top of the hill, he notices his nephews, Huey, Dewey a', 1958, 'donald_duck.jpg', 'G', 1, 'https://www.youtube.com/watch?v=-fIomAY6SYA'),
(8, 'The Pink Panther in \'in OLYMPINKS!\'', 'The Pink Panther in: Olym-Pinks, is an animated sports-themed special which first aired on ABC on February 22, 1980 to coincide with the 1980 Winter Olympics. This was the final Pink Panther cartoon to be produced by DePatie?Freleng Enterprises as well as', 1959, 'pink_panther.jpg', 'G', 1, 'https://www.youtube.com/watch?v=4fVTHYU8GNo'),
(9, 'Spider-Man', 'Original cartoon series based on the web-slinging Marvel comic book character, Peter Parker, who, after being bit by a radioactive spider, assumes extraordinary powers.', 1967, 'spider_man.jpg', 'G', 1, 'https://www.youtube.com/watch?v=jkKL7uJd2no'),
(10, 'The Beatles', 'The musical adventures of the greatest of the Rock Bands.', 1965, 'beatles_anim.jpg', 'G', 1, 'https://www.youtube.com/watch?v=mdyY7SLh6c4'),
(11, 'The Trap', 'A fur trapper takes a mute girl as his unwilling wife to live with him in his remote cabin in the woods.', 1967, 'the_trap.jpg', '18A', 1, 'https://www.youtube.com/watch?v=OlWjhKaehSk'),
(12, 'Capitan America', 'The patriotic sole recipient of a revolutionary body enhancement project battles evil as the star spangled defender of America.', 1966, 'capitan_america.jpg', 'G', 1, 'https://www.youtube.com/watch?v=sFxlaWO0erk'),
(13, 'Hulk', 'The adventures of a nuclear scientist cursed with the tendency to turning into a huge green brute under stress.', 1966, 'hulk.jpg', 'G', 1, 'https://www.youtube.com/watch?v=b9u7GjNkp5Y'),
(14, 'That Cold Day in the Park', 'A rich but lonely woman, Frances Austen, one day invites a homeless young man from a nearby park to her apartment and offers to let him live there. However, she has no intention of ever letting him leave again.', 1969, 'cold_day_park.jpg', 'R', 1, 'https://www.youtube.com/watch?v=6VGGjPSh7Yw'),
(15, 'The Incredible Journey', 'The story of three pets, a cat and two dogs, who lose their owners when they are all on vacation. Can they find their way home?', 1963, 'incredible_journey.jpg', 'R18A', 1, 'https://www.youtube.com/watch?v=WKJChEYLVaU'),
(16, 'The Fox', 'Based on D.H. Lawrence\'s novella about two young women - sickly, chattering Jill Banford and quiet, strong Ellen March - who are trying, hopelessly, to run a chicken farm in Canada.', 1968, 'the_fox.jpg', 'R', 1, 'https://www.youtube.com/watch?v=DYiU7hceyqw'),
(17, 'The Mask', 'A young archaeologist believes he is cursed by a mask that causes him to have weird nightmares and possibly to murder. Before committing suicide, he mails the mask to his psychiatrist, Dr. Barnes, who is soon plunged into the nightmare world of the mask.', 1961, 'the_mask.jpg', 'R', 1, 'https://www.youtube.com/watch?v=oJigBoo4DxY'),
(18, 'Superman', 'An alien orphan is sent from his dying planet to Earth, where he grows up to become his adoptive home\'s first and greatest superhero.', 1978, 'superman.jpg', 'G', 1, 'https://www.youtube.com/watch?v=394jYH82s2o'),
(19, 'Starship Invasion', 'An advance team from a dying, far-off civilization seeks a new world to conquer and inhabit -- Earth.', 1977, 'starship_invasion.jpg', 'G', 1, 'https://www.youtube.com/watch?v=QESnwxRUxyw'),
(20, 'The Godfather', 'The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.', 1972, 'godfather.jpg', 'R', 1, 'https://www.youtube.com/watch?v=fB_8VCwXydM'),
(21, 'Jaws', 'When a killer shark unleashes chaos on a beach resort, it\'s up to a local sheriff, a marine biologist, and an old seafarer to hunt the beast down.', 1975, 'jaws.jpg', 'R', 1, 'https://www.youtube.com/watch?v=U1fu_sA7XhE'),
(22, 'Star Wars: Episode IV - A New Hope', 'Luke Skywalker joins forces with a Jedi Knight, a cocky pilot, a Wookiee and two droids to save the galaxy from the Empire\'s world-destroying battle station, while also attempting to rescue Princess Leia from the mysterious Darth Vader.', 1977, 'sw_1977.jpg', 'G', 1, 'https://www.youtube.com/watch?v=XHk5kCIiGoM'),
(23, 'A Clockwork Orange', 'In the future, a sadistic gang leader is imprisoned and volunteers for a conduct-aversion experiment, but it doesn\'t go as planned.', 1971, 'cloackwork_orange.jpg', 'R', 1, 'https://www.youtube.com/watch?v=xHFPi_3kc1U'),
(24, 'Close Encounters of the Third Kind', 'Roy Neary, an electric lineman, watches how his quiet and ordinary daily life turns upside down after a close encounter with a UFO.', 1977, 'close_encounters.jpg', 'G', 1, 'https://www.youtube.com/watch?v=Fxp32VHaYdE'),
(25, 'Apocalypse Now', 'During the Vietnam War, Captain Willard is sent on a dangerous mission into Cambodia to assassinate a renegade Colonel who has set himself up as a god among a local tribe.', 1979, 'apocalypse_now.jpg', 'R', 1, 'https://www.youtube.com/watch?v=FTjG-Aux_yQ'),
(26, 'Rocky', 'A small-time boxer gets a supremely rare chance to fight a heavy-weight champion in a bout in which he strives to go the distance for his self-respect.', 1976, 'rocky.jpg', 'G', 1, 'https://www.youtube.com/watch?v=7RYpJAUMo2M'),
(27, 'Back To The Future', 'Marty McFly, a 17-year-old high school student, is accidentally sent thirty years into the past in a time-traveling DeLorean invented by his close friend, the maverick scientist Doc Brown.', 1985, 'backtothefuture.jpg', 'G', 1, 'https://www.youtube.com/watch?v=qvsgGtivCgs'),
(28, 'Ghostbusters', 'Three former parapsychology professors set up shop as a unique ghost removal service.', 1984, 'ghostbuster.jpg', 'G', 1, 'https://www.youtube.com/watch?v=vntAEVjPBzQ'),
(29, 'E.T. The Extra-Terrestrial', 'A troubled child summons the courage to help a friendly alien escape Earth and return to his home world.', 1982, 'et.jpg', 'G', 1, 'https://www.youtube.com/watch?v=qYAETtIIClk'),
(30, 'Star Wars: Episode V - The Empire Strikes Back', 'After the rebels are brutally overpowered by the Empire on the ice planet Hoth, Luke Skywalker begins Jedi training with Yoda, while his friends are pursued by Darth Vader.', 1980, 'sw_1980.jpg', 'G', 1, 'https://www.youtube.com/watch?v=JNwNXF9Y6kY'),
(31, 'The Goonies', 'In order to save their home from foreclosure, a group of misfits set out to find a pirate\'s ancient valuable treasure.', 1985, 'goonies.jpg', 'G', 1, 'https://www.youtube.com/watch?v=hJ2j4oWdQtU'),
(32, 'Blade Runner', 'A blade runner must pursue and terminate four replicants who stole a ship in space, and have returned to Earth to find their creator.', 1982, 'bladerunner.jpg', 'R', 1, 'https://www.youtube.com/watch?v=eogpIG53Cis'),
(33, 'The NeverEnding Story', 'A troubled boy dives into a wondrous fantasy world through the pages of a mysterious book.', 1984, 'neverendingstory.jpg', 'G', 1, 'https://www.youtube.com/watch?v=UeFni9dOv7c'),
(34, 'The Karate Kid', 'A martial arts master agrees to teach karate to a bullied teenager.', 1984, 'karate_kid', 'G', 1, 'https://www.youtube.com/watch?v=n7JhKCQnEqQ'),
(35, 'Jurassic Park', 'During a preview tour, a theme park suffers a major power breakdown that allows its cloned dinosaur exhibits to run amok.', 1993, 'jurassic_park.jpg', 'G', 1, 'https://www.youtube.com/watch?v=lc0UehYemQA'),
(36, 'Toy Story', '\nToy Story\nThe poster features Woody anxiously holding onto Buzz Lightyear as he flies in Andy\'s room. Below them sitting on the bed are Bo Peep, Mr. Potato Head, Troll, Hamm, Slinky, Sarge and Rex. In the lower right center of the image is the film\'s tit', 1995, 'toy_story.jpg', 'G', 1, 'https://www.youtube.com/watch?v=KYz2wyBy3kc'),
(37, 'Home Alone', 'An eight-year-old troublemaker must protect his house from a pair of burglars when he is accidentally left home alone by his family during Christmas vacation.', 1990, 'homealone.jpg', 'G', 1, 'https://www.youtube.com/watch?v=jEDaVHmw7r4'),
(38, 'Forest Gump', 'The presidencies of Kennedy and Johnson, Vietnam, Watergate, and other history unfold through the perspective of an Alabama man with an IQ of 75.', 1994, 'forestgump.jpg', 'G', 1, 'https://www.youtube.com/watch?v=XHhAG-YLdk8'),
(39, 'Space Jam', 'Space Jam is a 1996 American live-action/animated sports comedy film starring basketball player Michael Jordan and featuring the Looney Tunes cartoon characters. ', 1996, 'spacejam.jpg', 'G', 1, 'https://www.youtube.com/watch?v=oKNy-MWjkcU'),
(40, 'The Lion King', 'A Lion cub crown prince is tricked by a treacherous uncle into thinking he caused his father\'s death and flees into exile in despair, only to learn in adulthood his identity and his responsibilities.', 1994, 'lionking.jpg', 'G', 1, 'https://www.youtube.com/watch?v=hY7xBISLBIA');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_mov_cat`
--

DROP TABLE IF EXISTS `tbl_mov_cat`;
CREATE TABLE IF NOT EXISTS `tbl_mov_cat` (
  `mov_cat_id` tinyint(3) UNSIGNED NOT NULL AUTO_INCREMENT,
  `movie_id` smallint(6) NOT NULL,
  `cat_id` tinyint(4) NOT NULL,
  PRIMARY KEY (`mov_cat_id`)
) ENGINE=InnoDB AUTO_INCREMENT=48 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `tbl_mov_cat`
--

INSERT INTO `tbl_mov_cat` (`mov_cat_id`, `movie_id`, `cat_id`) VALUES
(1, 1, 17),
(2, 2, 17),
(3, 3, 9),
(4, 4, 17),
(5, 5, 12),
(6, 6, 12),
(7, 7, 12),
(8, 8, 12),
(9, 9, 12),
(10, 10, 12),
(11, 11, 17),
(12, 12, 1),
(13, 13, 4),
(14, 14, 17),
(15, 15, 3),
(16, 16, 17),
(17, 17, 17),
(18, 18, 1),
(19, 19, 4),
(20, 20, 17),
(21, 21, 17),
(22, 22, 1),
(23, 23, 17),
(24, 24, 4),
(25, 25, 5),
(26, 26, 17),
(27, 27, 2),
(28, 28, 2),
(29, 29, 3),
(30, 30, 1),
(31, 31, 2),
(32, 32, 17),
(33, 33, 3),
(34, 34, 1),
(35, 35, 17),
(36, 36, 12),
(37, 37, 3),
(38, 38, 16),
(39, 39, 2),
(40, 40, 12),
(41, 5, 3),
(42, 6, 3),
(43, 7, 3),
(44, 8, 3),
(45, 9, 3),
(46, 10, 3),
(47, 13, 4);

-- --------------------------------------------------------

--
-- Table structure for table `tbl_music`
--

DROP TABLE IF EXISTS `tbl_music`;
CREATE TABLE IF NOT EXISTS `tbl_music` (
  `music_id` smallint(5) UNSIGNED NOT NULL AUTO_INCREMENT,
  `music_title` varchar(180) NOT NULL,
  `music_desc` varchar(255) NOT NULL,
  `music_year` year(4) NOT NULL,
  `music_img` varchar(255) NOT NULL,
  `music_certificate` varchar(80) NOT NULL,
  `music_switch` tinyint(1) NOT NULL DEFAULT '1',
  `music_link` varchar(255) NOT NULL,
  PRIMARY KEY (`music_id`)
) ENGINE=InnoDB AUTO_INCREMENT=41 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `tbl_music`
--

INSERT INTO `tbl_music` (`music_id`, `music_title`, `music_desc`, `music_year`, `music_img`, `music_certificate`, `music_switch`, `music_link`) VALUES
(1, 'Elvis Presley - Jailhouse Rock', '\"Songwriters: Jerry Leiber / Mike Stoller\r\nJailhouse Rock lyrics © Sony/ATV Music Publishing LLC, Kobalt Music Publishing Ltd.\"\r\n', 1957, 'elvis_presley.jpg', 'G', 1, 'https://youtu.be/gj0Rz-uP4Mk'),
(2, 'Elvis Presley - Don\'t Be Cruel\r\n', 'Songwriters: Otis Blackwell / Elvis Presley\r\n', 1956, 'cruel.jpg', 'G', 1, 'https://youtu.be/ViMF510wqWA'),
(3, 'Everly Brothers - Wake Up Little Susie\r\n', '\"Songwriters: Boudleaux Bryant / Felice Bryant\r\nWake Up Little Susie lyrics © Sony/ATV Music Publishing LLC, House Of Bryant Publications\"\r\n', 1958, 'wake_up.jpg', 'G\r\n', 1, 'https://youtu.be/LojqhHnmyvc'),
(4, 'Ray Charles - What\'d I Say\r\n', '\"Songwriters: Ray Charles\r\nWhat\'d I Say lyrics © Sony/ATV Music Publishing LLC, Warner/Chappell Music, Inc\"\r\n', 1959, 'say.jpg', 'G', 1, 'https://youtu.be/6uTDa3771HM\r\n'),
(5, 'Elvis presley - its now or never \r\n', '\"Songwriters: Aaron H. Schroeder / Wally Gold\r\nIt\'s Now or Never lyrics © Raleigh Music Publishing\"\r\n', 1960, 'never.jpg', 'G', 1, 'https://youtu.be/QkMVscR5YOo'),
(6, 'The Temptations - My Girl\r\n', '\"Songwriters: William Smokey Robinson / Ronald White\r\nMy Girl lyrics © Sony/ATV Music Publishing LLC\"\r\n', 1965, 'temptations.jpg', 'G', 1, 'https://youtu.be/C_CSjcm-z1w'),
(7, 'The Archies - Sugar, Sugar\r\n', '\"Songwriters: Andy Kim / Jeff Barry\r\nSugar, Sugar lyrics © Sony/ATV Music Publishing LLC\"\r\n', 1969, 'sugar.jpg', 'G', 1, 'https://youtu.be/h9nE2spOw_o'),
(8, 'The Monkees- I\'m a Believer\r\n', 'Songwriters: Neil Diamond\r\n', 1967, 'believer.jpg\r\n', 'G', 1, 'https://youtu.be/gv2MLlZKarM'),
(9, 'Comfortably Numb - Pink Floyd\r\n', 'Songwriters: David Jon Gilmour / George Roger Waters\r\n', 1979, 'numb.jpg', 'G', 1, 'https://youtu.be/YQWszrZHBPI'),
(10, 'Bee Gees - Stayin\' Alive\r\n', '\"Artist: Bee Gees\r\nMovie: Saturday Night Fever\"\r\n', 1977, 'bee.jpg', 'G', 1, 'https://youtu.be/I_izvAbhExY'),
(11, 'Diana Ross: Ain\'t No Mountain High Enough\r\n', '\"Artist: Diana Ross\r\nAlbum: Diana Ross\"\r\n', 1970, 'enough.jpg', 'G', 1, 'https://youtu.be/5_pmKPWLBrE'),
(12, 'Blondie Heart of glass\r\n', '\"Artist: Blondie\r\nAlbum: Parallel Lines\"\r\n', 1978, 'glass.jpg', 'G', 1, 'https://youtu.be/gbnbMMCfyoc'),
(13, 'I Will Survive - Gloria Gaynor \r\n', '\"Artist: Gloria Gaynor\r\nAlbum: Love Tracks\"\r\n', 1978, 'survive.jpg', 'G', 1, 'https://youtu.be/gYkACVDFmeg'),
(14, 'Rod Stewart-Maggie May\r\n', '\"Artist: Rod Stewart\r\nAlbum: Every Picture Tells a Story\"\r\n', 1971, 'may.jpg\r\n', 'G', 1, 'https://youtu.be/7T5hYlUsQ0s'),
(15, 'JACKSON 5 STOP THE LOVE YOU SAVE \r\n', '\"Artist: The Jackson 5\r\nAlbum: ABC\"\r\n', 1970, 'save.jpg', 'G', 1, 'https://youtu.be/C6pLV9xZczM\r\n'),
(16, 'Michael Jackson - Don\'t Stop \'Til You Get Enough\r\n', '\"Artist: Michael Jackson\r\nAlbum: Off the Wall\"\r\n', 1979, 'mj.jpg\r\n', 'G', 1, 'https://youtu.be/yURRmWtbTbo'),
(17, 'Lionel Richie - All Night Long\r\n', '\"Artist: Lionel Richie\r\nAlbum: Can\'t Slow Down\"\r\n', 1983, 'night_long.jpg', 'G', 1, 'https://youtu.be/nqAvFx3NxUM'),
(18, 'Prince - When Doves Cry \r\n', '\"Artist: Prince\r\nMovie: Purple Rain\"\r\n', 1984, 'cry.jpg', 'G', 1, 'https://youtu.be/UG3VcCAlUgE'),
(19, '(Just Like) Starting Over\r\n', '\"Artist: John Lennon\r\nAlbum: Double Fantasy\"\r\n', 1980, 'over.jpg', 'G', 1, 'https://youtu.be/pZCxyOcvp5A'),
(20, 'Madonna - Like A Virgin\r\n', '\"Artist: Madonna\r\nAlbum: Like a Virgin\"\r\n', 1984, 'madonna.jpg', 'G', 1, 'https://youtu.be/s__rX_WL100'),
(21, 'Endless Love - Diana Ross & Lionel Richie\r\n', '\"Artists: Lionel Richie, Diana Ross\r\nAlbum: Why Do Fools Fall in Love\"\r\n', 1981, 'richie.jpg', 'G', 1, 'https://youtu.be/Ewf0TnM4eKo'),
(22, 'Queen - Crazy Little Thing Called Love\r\n', '\"Artist: Queen\r\nAlbum: The Game\"\r\n', 1980, 'queen.jpg', 'G', 1, 'https://youtu.be/zO6D_BAuYCI'),
(23, 'Ebony and Ivory - Paul McCartney and Stevie Wonder\r\n', '\"Artists: Paul McCartney, Stevie Wonder\r\nAlbum: Tug of War\"\r\n', 1981, 'wonder.jpg', 'G', 1, 'https://youtu.be/TZtiJN6yiik'),
(24, 'Michael Jackson - Beat It\r\n', '\"Artist: Michael Jackson\r\nAlbum: Thriller\"\r\n', 1982, 'beat_it.jpg', 'G', 1, 'https://youtu.be/oRdxUFDoQe0'),
(25, 'Michael Jackson - Smooth Criminal\r\n', '\"Artist: Michael Jackson\r\nMovie: Michael Jackson\'s This Is It\"\r\n', 1987, 'criminal.jpg', 'G', 1, 'https://youtu.be/h_D3VFfhvs4'),
(26, 'Michael Jackson - Man In The Mirror\r\n', '\"Artist: Michael Jackson\r\nMovie: Michael Jackson\'s This Is It\"\r\n', 1987, 'mirror.jpg', 'G', 1, 'https://youtu.be/PivWY9wn5ps'),
(27, 'Whitney Houston - I Wanna Dance With Somebody\r\n', '\"Artist: Whitney Houston\r\nAlbum: Whitney\"\r\n', 1987, 'dance.jpg', 'G', 1, 'https://youtu.be/eH3giaIzONA'),
(28, 'REO Speedwagon - Keep on Loving You\r\n', '\"Artist: REO Speedwagon\r\nAlbum: Hi Infidelity\"\r\n', 1980, 'reo.jpg', 'G', 1, 'https://youtu.be/wJzNZ1c5C9c'),
(29, 'Rick Springfield - Jessie\'s Girl', '\"Artist: Rick Springfield\r\nAlbum: Working Class Dog\"\r\n', 1981, 'rick.jpg', 'G', 1, 'https://youtu.be/qYkbTyHXwbs\r\n'),
(30, 'New Order - Blue Monday\r\n', '\"Artist: New Order\r\nAlbum: Power, Corruption & Lies\"\r\n', 1983, 'monday.jpg', 'G', 1, 'https://youtu.be/FYH8DsU2WCk'),
(31, 'Sinéad O\'Connor - Nothing Compares 2U\r\n', '\"Artist: Sinéad O\'Connor\r\nAlbum: I Do Not Want What I Haven\'t Got\"\r\n', 1990, 'compares.jpg', 'G', 1, 'https://youtu.be/0-EF60neguk'),
(32, 'Nirvana - Smells Like Teen Spirit\r\n', '\"Artist: Nirvana\r\nAlbum: Nevermind\"\r\n', 1991, 'spirit.jpg', 'G', 1, 'https://youtu.be/hTWKbfoikeg'),
(33, 'Aqua - Barbie Girl\r\n', '\"Artist: Aqua\r\nAlbum: Aquarium\"\r\n', 1997, 'barbie.jpg', 'G', 1, 'https://youtu.be/ZyhrYis509A'),
(34, 'TLC - No Scrubs\r\n', '\"Artist: TLC\r\nAlbum: FanMail\"\r\n', 1999, 'tlc.jpg', 'G', 1, 'https://youtu.be/FrLequ6dUdM'),
(35, 'Fugees - Killing Me Softly With His Song\r\n', '\"Artist: Fugees\r\nAlbum: The Score\"\r\n', 1996, 'fugges.jpg', 'G', 1, 'https://youtu.be/oKOtzIo-uYw'),
(36, 'Coolio - Gangsta\'s Paradise\r\n', '\"Artist: Coolio\r\nFeatured artist: L.V.\"\r\n', 1995, 'coolio.jpg', 'G', 1, 'https://youtu.be/fPO76Jlnz6c'),
(37, 'Christina Aguilera - Genie In A Bottle\r\n', '\"Artist: Christina Aguilera\r\nAlbum: Christina Aguilera\"\r\n', 1999, 'bottle.jpg', 'G', 1, 'https://youtu.be/kIDWgqDBNXA'),
(38, 'Semisonic - Closing Time\r\n', '\"Artist: Semisonic\r\nAlbum: Feeling Strangely Fine\"\r\n', 1998, 'time.jpg\r\n', 'G', 1, 'https://youtu.be/xGytDsqkQY8'),
(39, 'Good Riddance (Time Of Your Life) \r\n', '\"Artist: Green Day\r\nAlbum: Nimrod\"\r\n', 1997, 'good.jpg', 'G', 1, 'https://youtu.be/CnQ8N1KacJc'),
(40, 'The Cardigans= Lovefool\r\n', '\"Artist: The Cardigans\r\nAlbum: First Band on the Moon\"\r\n', 1996, 'lovefool.jpg', 'G', 1, 'https://youtu.be/xG_N5x8KmX4');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_mus_cat`
--

DROP TABLE IF EXISTS `tbl_mus_cat`;
CREATE TABLE IF NOT EXISTS `tbl_mus_cat` (
  `mus_cat_id` tinyint(3) UNSIGNED NOT NULL AUTO_INCREMENT,
  `music_id` smallint(6) NOT NULL,
  `cat_id` tinyint(4) NOT NULL,
  PRIMARY KEY (`mus_cat_id`)
) ENGINE=InnoDB AUTO_INCREMENT=81 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `tbl_mus_cat`
--

INSERT INTO `tbl_mus_cat` (`mus_cat_id`, `music_id`, `cat_id`) VALUES
(1, 1, 22),
(2, 2, 19),
(3, 3, 22),
(4, 4, 18),
(5, 5, 21),
(6, 6, 25),
(7, 7, 23),
(8, 8, 23),
(9, 9, 22),
(10, 10, 20),
(11, 11, 23),
(12, 12, 25),
(13, 13, 25),
(14, 14, 22),
(15, 15, 23),
(16, 16, 23),
(17, 17, 23),
(18, 18, 20),
(19, 19, 22),
(20, 20, 23),
(21, 21, 19),
(22, 22, 21),
(23, 23, 23),
(24, 24, 22),
(25, 25, 23),
(26, 26, 23),
(27, 27, 25),
(28, 28, 23),
(29, 29, 23),
(30, 30, 22),
(31, 31, 23),
(32, 32, 19),
(33, 33, 25),
(34, 34, 19),
(35, 35, 24),
(36, 36, 23),
(37, 37, 23),
(38, 38, 22),
(39, 39, 22),
(40, 40, 23);

-- --------------------------------------------------------

--
-- Table structure for table `tbl_tv`
--

DROP TABLE IF EXISTS `tbl_tv`;
CREATE TABLE IF NOT EXISTS `tbl_tv` (
  `tv_id` smallint(5) UNSIGNED NOT NULL AUTO_INCREMENT,
  `tv_title` varchar(180) NOT NULL,
  `tv_desc` varchar(255) NOT NULL,
  `tv_year` year(4) NOT NULL,
  `tv_img` varchar(255) NOT NULL,
  `tv_certificate` varchar(80) NOT NULL,
  `tv_swtich` tinyint(1) NOT NULL DEFAULT '1',
  `tv_link` varchar(255) NOT NULL,
  PRIMARY KEY (`tv_id`)
) ENGINE=InnoDB AUTO_INCREMENT=41 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `tbl_tv`
--

INSERT INTO `tbl_tv` (`tv_id`, `tv_title`, `tv_desc`, `tv_year`, `tv_img`, `tv_certificate`, `tv_swtich`, `tv_link`) VALUES
(1, 'The Adventures of Ozzie and Harriet - The Rivals (1952)', 'The first episode of the 14-season ABC series, \"The Adventures of Ozzie and Harriet\", complete with original commercials.\r\n', 1952, 'Adventures_Ozzie.jpg', 'TV-G', 1, 'https://youtu.be/TF5WgeQQYbE?list=PLjygzGIObj8_3elt1J8FsYnV456c2gCLW'),
(2, 'Lassie-Jeff\'s collie', 'The complete first  Lassie TV episode.  In this episode Jeff Miller inherits a young collie named Lassie after the death of her owner, an old neighbor of the Miller family.', 1954, 'Lassie_Jeffs_collie.jpg', 'TV-G', 1, 'https://youtu.be/lXquPCNsPzM?list=PLjygzGIObj8_3elt1J8FsYnV456c2gCLW'),
(3, 'Make Room for Daddy', 'Danny forgets his wedding anniversary. With flashback to Danny and Margaret\'s first anniversary eleven years earlier.', 1953, 'danny_thomas.jpg', 'TV-PG', 1, 'https://youtu.be/W8s9soNaVCU?list=PLjygzGIObj8_3elt1J8FsYnV456c2gCLW'),
(4, 'Mother-in-Law\r\n', '\"Danny\'s mother-in-law babysits the children and tells them about her Vaudeville days. \r\nWith original commercials for the show\'s sponsors, Dodge and Lucky Strike.\"\r\n', 1953, 'mother.jpg', 'TV-PG', 1, 'https://youtu.be/V_USXDFLgWg?list=PLjygzGIObj8_3elt1J8FsYnV456c2gCLW\r\n'),
(5, 'April Fools Day on the Howdy Doody Show', '\"The Howdy Doody Show was the first\r\n nationally televised children\'s television show and was also the first NBC show to air five days a week. In addition, it was the first show\r\n ever to air more than 1,000 continuous episodes.\"\r\n', 1952, 'howdy_doody.jpg', 'R', 1, 'https://youtu.be/9pK0hNljoTg?list=PLjygzGIObj8_3elt1J8FsYnV456c2gCLW'),
(6, 'Shrinking Machine\r\n', 'Howdy Doody episode \'Shrinking Machine\' from 1958 \r\n', 1958, 'Shrinking_machine,jpg', 'TV-G', 1, 'https://youtu.be/P7Py6ORWJ-w?list=PLjygzGIObj8_3elt1J8FsYnV456c2gCLW'),
(7, 'What\'s My Line? Alfred Hitchcock, Miss America\r\n', 'Tonight\'s episode of What\'s My Line? has Robert Q. Lewis on the panel.  There are two mystery guests, the year\'s Miss America and Alfred Hitchcock\r\n', 1950, 'What_MyLine.jpg', 'TV-G', 1, 'https://youtu.be/SuoGnwWNYvU?list=PLjygzGIObj8_3elt1J8FsYnV456c2gCLW'),
(8, 'To Tell the Truth - Chester Conklin, original Keystone Cop\r\n', 'Classic game show in which a person of some notoriety and two impostors try to match wits with a panel of four celebrities. The object of the game is to try to fool the celebrities into\r\n', 1957, 'Tell_the_truth.jpg', 'TV-G', 1, 'https://youtu.be/HPEq4dwu_rA?list=PLjygzGIObj8_3elt1J8FsYnV456c2gCLW'),
(9, 'Jack Benny Program: Jack at the Supermarket\r\n', 'Rochester beat Jack in gin rummy and has taken the afternoon off to play golf, leaving Jack stuck with the household chores.\r\n', 1960, 'jack_supermarket.jpg', 'TV-PG\r\n', 1, 'https://youtu.be/ZqbmnZ7sgZM?list=PLjygzGIObj8_3elt1J8FsYnV456c2gCLW'),
(10, 'The Doctor Denker Story\r\n', '\"Wagon Train (1962) - The Doctor Denker Story\r\nSeason 5, Episode 18. Original Airdate: Jan. 31, 1962\r\nWhen a traveling musician joins the wagon train, it quickly becomes evident that there is more to him than meets the eye. \"\r\n', 1962, 'Denker_Story.jpg', 'TV-PG', 1, 'https://youtu.be/KyDz5etzmxI?list=PLwygboCFkeeAitLKN3V9uFoEcUCDntCvL'),
(11, 'Doctor Who \r\n', '\"The adventures in time and space of the Doctor, a \r\nTime Lord who changes appearance and personality \r\nby regenerating when near death, and is joined by \r\ncompanions in battles against aliens and other megalomaniacs.\"\r\n', 1963, 'Doctor_Who.jpg ', 'TV-PG', 1, 'https://youtu.be/09h9SCp94s8'),
(12, 'Star Trek\r\n', 'This episode is from the 1996 Interactive Movie game \"Star Trek: Borg\".\r\n', 1966, 'Star_Trek.jpg', 'TV-PG', 1, 'https://youtu.be/hi2HO5e_oeM?list=PLl4oTqKnM8rxPQ5Je71zXicHKNJitx7Do'),
(13, 'The Prisoner\r\n', '\"The Prisoner. It originally aired in the UK on ITV on 29 September 1967 \r\nand was first broadcast in the United States on CBS on 1 June 1968\"\r\n', 1967, 'The_Prisoner.jpg', 'TV-PG', 1, 'https://youtu.be/RyYOgXLenI8'),
(14, 'Monty Python\'s Flying Circus\r\n', 'The original surreal sketch comedy showcase for the Monty Python troupe.\r\n', 1969, 'Monty_Python.jpg', 'TV-14', 1, 'https://youtu.be/HMJGRZdKblg?list=PL0311C3280CF55105'),
(15, 'The Bugs Bunny Show \r\n', 'Bugs Bunny, the famous, Oscar-winning cartoon rabbit, hosts his first weekly television series\r\n', 1960, 'Bunny_Show.jpg', 'TV-G', 1, 'https://youtu.be/n0wiYpBez-Q'),
(16, 'The Bullwinkle Show\r\n', 'Rocky, a plucky flying squirrel and Bullwinkle, a bumbling but lovable moose, have a series of ongoing adventures.\r\n', 1961, 'Bullwinkle_Show.jpg', 'TV-G', 1, 'https://youtu.be/21i76QOczVA'),
(17, 'Scenes from a Marriage\r\n', 'Ten years within the marriage of Marianne and Johan.\r\n', 1973, 'Marriage.jpg', 'PG', 1, 'https://youtu.be/_KA8fwi5u-s'),
(18, 'The World at War\r\n', 'A groundbreaking 26-part documentary series narrated by the actor Laurence Olivier about the deadliest conflict in history, World War II.\r\n', 1973, 'World_at_War.jpg', 'TV-PG', 1, 'https://youtu.be/0b4g4ZZNC1E'),
(19, 'Fawlty Towers \r\n\r\n', 'Hotel owner Basil Fawlty\'s incompetence, short fuse, and arrogance form a combination that ensures accidents and trouble are never far away.\r\n', 1975, 'Fawlty_Towers.jpg', 'TV-G\r\n', 1, 'https://youtu.be/xzp7Y4mCr2E'),
(20, 'The Muppet Show\r\n', 'Kermit the Frog and his friends struggle to put on a weekly variety show.\r\n', 1976, 'Muppet_Show.jpg', 'TV-G', 1, 'https://youtu.be/xzp7Y4mCr2E'),
(21, 'I, Claudius \r\n', 'The history of the Roman Empire as experienced by one of its rulers.\r\n', 1976, 'Claudius .jpg', 'TV-G', 1, 'https://youtu.be/B7HHrkoac0o'),
(22, 'Jesus of Nazareth \r\n', '\"Beginning before the Nativity and extending through the Crucifixion and Resurrection, this mini-series brings to life all of the sweeping drama in the life of Jesus, \r\nas told by the Gospels..\"\r\n', 1977, 'Jesus.jpg', 'TV-G', 1, 'https://youtu.be/50IiF1rTTGQ'),
(23, 'Mind Your Language\r\n', 'Jeremy Brown is a put-upon language teacher who tries to make a living by teaching English to immigrants.\r\n', 1978, 'Mind_Your_Language.jpg', 'PG', 1, 'https://youtu.be/vhd1IqNM3M8'),
(24, 'Tinker Tailor Soldier Spy\r\n', 'In the bleak days of the Cold War, espionage veteran George Smiley is forced out of semi-retirement to uncover a Soviet Agent within MI6\'s echelons.\r\n', 1979, 'Soldier_Spy.jpg', 'TV-14', 1, 'https://youtu.be/pq61jstTApk'),
(25, 'Yes Minister \r\n', 'The Right Honorable James Hacker has landed the plum job of Cabinet Minister to the Department of Administration.\r\n', 1980, 'Yes_Minister.jpg', 'TV-PG', 1, 'https://youtu.be/SdVFD1MuPrU'),
(26, 'Cosmos \r\n', 'Astronomer Carl Sagan leads us on an engaging guided tour of the various elements and cosmological theories of the universe.\r\n', 1980, 'Cosmos.jpg', 'TV-PG', 1, 'https://youtu.be/OSnhugfPMGY?list=PLmSKUtrLFVU8UYoBgG-RlEFL9egFwvThx'),
(27, 'Only Fools and Horses', '\"Comedy that follows two brothers from \r\nLondon\'s rough Peckham estate as they\r\n wheel and deal through a number of dodgy\r\n deals as they search for the big score that\'ll make them millionaires.\"\r\n', 1981, 'Fools&Horses.jpg', 'TV-PG', 1, 'https://youtu.be/J1y1D4wujMc?list=PL1ibBy_WimN0dyXmAHsix9hy9IDLGYyd4'),
(28, 'Brideshead Revisited', 'Charles Ryder, though of no family or money, becomes friends with Sebastian Flyte when Sebastian throws up in his college room through an open window. \r\n', 1981, 'Brideshead.jpg', 'TV-PG', 1, 'https://youtu.be/GOKLsbtLsLQ?list=PL-NIGjxJ2hZ5Esaq3TZksQsY7gZ_u0Ib8'),
(29, 'Police Squad!', 'Sight gags and non-sequiturs dominate this spoof of police dramas. \r\n', 1982, 'Police_Squad.jpg', 'TV-PG', 1, 'https://youtu.be/7e1_nr3H178'),
(30, 'The Adventures of Sherlock Holmes\r\n', '\"Sherlock Holmes and Dr Watson solve the mysteries of \r\ncopper beeches, a Greek interpreter, the Norwood builder, \r\na resident patient, the red-headed league, and one final problem.\"\r\n', 1984, 'Sherlock_Holmes.jpg', 'TV-PG', 1, 'https://youtu.be/bRJo0uIH8Us?list=PLTvLq79zCwvL8GsPVNKJNosVzqFYHKq1O'),
(31, 'Das Boot', 'A World War II German U-Boat crew have a terrifying patrol mission in the early days of the war.\r\n', 1985, 'Das_Boot.jpg', 'TV-MA', 1, 'https://youtu.be/2dRGfGrGFF0'),
(32, 'Yes, Prime Minister', 'James Hacker was propelled along the corridors of power to the very pinnacle of politic\r\n', 1986, 'Prime_Minister.jpg', 'TV-PG', 1, 'https://youtu.be/S3FvnNk4u_o'),
(33, 'Twin Peaks \r\n', 'An idiosyncratic FBI agent investigates the murder of a young woman in the even more idiosyncratic town of Twin Peaks.\r\n', 1990, 'Twin_Peaks.jpg', 'TV-MA', 1, 'https://youtu.be/q040A3z1W08?list=PL3O86-pmeeuEHQg16LwTBVTV1NbABleyr\r\n'),
(34, 'Batman: The Animated Series\r\n', 'The Dark Knight battles crime in Gotham City with occasional help from Robin and Batgirl.\r\n', 1992, 'batman.jpg', 'TV-PG', 1, 'https://youtu.be/9ZqJA5NZCyU?list=EL9uGMjD7xpa8'),
(35, 'X-Men\r\n', 'A team of mutant superheroes fight for justice and human acceptance in the Marvel Comics universe.\r\n', 1992, 'Xmen.jpg\r\n', 'TV-Y7\r\n', 1, 'https://youtu.be/1ggrTdnwqWM'),
(36, 'Homicide: Life on the Street', 'A police homicide investigation unit investigates violent crimes in the city of Baltimore.\r\n', 1993, 'Homicide.jpg', 'TV-14', 1, 'https://youtu.be/g4OLMnXJbfM'),
(37, 'Friends', 'Follows the personal and professional lives of six twenty to thirty-something-year-old friends living in Manhattan.\r\n', 1994, 'Friends.jpg', 'TV-14', 1, 'https://youtu.be/Uh0I6xe7Svc?list=PL4VjYMnxdYuW6Eqst_ko7JxLJgqC4ODfK'),
(38, 'Father Ted \r\n', '\"\r\nThree misfit priests and their housekeeper live on Craggy Island, not the peaceful and quiet part of Ireland that it seems to be.\"\r\n', 1995, 'FatherTed.jpg', 'TV-14', 1, 'https://youtu.be/TAMsPEiSLyY?list=PLCK5Lcs_vqSB0qGD9mtY-m_4OILTNaHww'),
(39, 'Dragon Ball Z\r\n', 'After learning that he is from another planet, a warrior named Goku and his friends are prompted to defend it from an onslaught of extraterrestrial enemies.\r\n', 1996, 'BallZ.jpg', 'TV-PG', 1, 'https://youtu.be/9862ND591Kg'),
(40, 'Oz\r\n', 'A series chronicling the daily activities of an unusual prison facility and its criminal inhabitants.\r\n', 1997, 'Oz.jpg', 'TV-MA', 1, 'https://youtu.be/NQC_tm4Tf6c?list=PLzVP5Khjq34eAKQI-wS0Fm4MuG0-1Qs-b');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_tv_cat`
--

DROP TABLE IF EXISTS `tbl_tv_cat`;
CREATE TABLE IF NOT EXISTS `tbl_tv_cat` (
  `tv_cat_id` tinyint(3) UNSIGNED NOT NULL AUTO_INCREMENT,
  `tv_id` smallint(6) NOT NULL,
  `cat_id` tinyint(4) NOT NULL,
  PRIMARY KEY (`tv_cat_id`)
) ENGINE=InnoDB AUTO_INCREMENT=41 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `tbl_tv_cat`
--

INSERT INTO `tbl_tv_cat` (`tv_cat_id`, `tv_id`, `cat_id`) VALUES
(1, 1, 2),
(2, 2, 17),
(3, 3, 3),
(4, 4, 2),
(5, 5, 7),
(6, 6, 1),
(7, 7, 3),
(8, 8, 3),
(9, 9, 2),
(10, 10, 17),
(11, 11, 17),
(12, 12, 1),
(13, 13, 1),
(14, 14, 2),
(15, 15, 12),
(16, 16, 12),
(17, 17, 17),
(18, 18, 13),
(19, 19, 2),
(20, 20, 2),
(21, 21, 17),
(22, 22, 17),
(23, 23, 2),
(24, 24, 17),
(25, 25, 2),
(26, 26, 13),
(27, 27, 2),
(28, 28, 17),
(29, 29, 6),
(30, 30, 2),
(31, 31, 17),
(32, 32, 2),
(33, 33, 6),
(34, 34, 12),
(35, 35, 12),
(36, 36, 6),
(37, 37, 2),
(38, 38, 2),
(39, 39, 12),
(40, 40, 6);

-- --------------------------------------------------------

--
-- Table structure for table `tbl_user`
--

DROP TABLE IF EXISTS `tbl_user`;
CREATE TABLE IF NOT EXISTS `tbl_user` (
  `user_id` tinyint(3) UNSIGNED NOT NULL AUTO_INCREMENT,
  `username` varchar(80) NOT NULL,
  `password` int(80) NOT NULL,
  PRIMARY KEY (`user_id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `tbl_user`
--

INSERT INTO `tbl_user` (`user_id`, `username`, `password`) VALUES
(1, 'the_boss', 123);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
