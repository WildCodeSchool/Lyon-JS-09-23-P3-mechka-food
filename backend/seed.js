/* eslint import/no-extraneous-dependencies: ["error", {"devDependencies": true}] */

// Load environment variables from .env file
require("dotenv").config();

// Import Faker library for generating fake data
// const { faker } = require("@faker-js/faker");

// Import database client
const database = require("./database/client");

const seed = async () => {
  try {
    // Declare an array to store the query promises
    // See why here: https://eslint.org/docs/latest/rules/no-await-in-loop
    const queries = [];

    /* ************************************************************************* */

    // Generating Seed Data
    await database.query("delete from category");
    queries.push(
      database.query(
        `INSERT INTO category (name, image_url) VALUES
            ('Entrée', 'https://ideogram.ai/api/images/direct/WOreRJGDQYuQD3Bd7HWXIg.jpg'),
            ('Plat', 'https://ideogram.ai/api/images/direct/-o4CWzygTuWWqNfhMm84bg.jpg'),
            ('Dessert', 'https://ideogram.ai/api/images/direct/VQxSmIp3RkCEWcN9ZXMV2w.jpg')`
      )
    );

    await database.query("delete from ingredient");
    queries.push(
      database.query(
        ` INSERT INTO ingredient (name) 
        VALUES 
        ('Pâtes'),
        ('Lardons fumés'),
        ('Œufs'),
        ('Parmesan râpé'),
        ('Poivre noir'),
        ('Sel'),
        ('Viande hachée'),
        ('Oignon'),
        ('Ail'),
        ('Carotte'),
        ('Céleri'),
        ('Tomates concassées en conserve'),
        ('Concentré de tomate'),
        ('Vin rouge'),
        ('Bouillon de bœuf'),
        ('Feuilles de basilic frais'),
        ('Huile Olive'),
        ("Poulet entier"),
        ("Paprika"),
        ("Beurre"),
        ("Thym"),
        ("Citron"),
        ("Filets de saumon"),
        ("Courgette"),
        ("Poivron rouge"),
        ("Tomates cerises"),
        ("Herbes de Provence"),
        ("Riz Arborio"),
        ("Champignons de Paris"),
        ("Vin blanc sec"),
        ("Bouillon de légumes"),
        ("Persil frais"),
        ("Pommes"),
        ("Sucre"),
        ("Cannelle"),
        ("Farine"),
        ("Flocons d'avoine"),
        ("Noix"),
        ("Extrait de vanille"),
        ("Levure chimique"),
        ("Pépites de chocolat"),
        ("Feuilles de lasagne"),
        ("Feuilles de laurier"),
        ("Lait"),
        ("Noix de muscade"),
        ("Fromage râpé"),
        ("Persil"),
        ("Échalote"),
        ("Moutarde"),
        ("Vinaigre balsamique"),
        ("Champignon"),
        ("Poirreau"),
        ("Haricot vert"),
        ("Canard"),
        ("Agneau"),
        ("Cabillaud"),
        ("Menthe"),
        ("Piment"),
        ("Orange"),
        ("Abricot"),
        ("Escalope"),
        ("Jambon"),
        ("Jambon cru"),
        ("Asperge"),
        ("Avocat"),
        ("Quinoa"),
        ("Oignon rouge"),
        ("Concombre"),
        ("Cresson"),
        ("Patate douce"),
        ("Lentille"),
        ("Lapin"),
        ("Dinde"),
        ("Porc"),
        ("Boeuf"),
        ("Lardons"),
        ("Yaourt nature"),
        ("Mascarpone"),
        ("Fromage blanc"),
        ("Confiture"),
        ("Pâte à tartiner"),
        ("Chocolat"),
        ("Miel"),
        ("Sucre glace"),
        ("Framboise"),
        ("Myrtille"),
        ("Caramel"),
        ("M&M's"),
        ("Fromage Bulgare"),
        ("Pâte feuilletée"),
        ("Pâte à pizza"),
        ("Pain"),
        ("Jaune d'oeuf"),
        ("Blanc d'oeuf"),
        ("Crème liquide"),
        ("Crème fraiche"),
        ("Crème épaisse"),
        ("Soja")
        `
      )
    );

    await database.query("delete from recipe");
    queries.push(
      database.query(
        `INSERT INTO recipe (title, descriptions, global_time, number_persons, image_url, category_id ) VALUES
            ('Pâtes à la Carbonara', "Une délicieuse recette de pâtes à la carbonara.", "30 minutes", 4, "https://images.pexels.com/photos/14930758/pexels-photo-14930758.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", 2 ),
            ('Spaghetti Bolognaise', "Découvrez l'authenticité de la cuisine italienne avec cette recette classique de spaghetti bolognaise. Une sauce riche, des pâtes al dente et une garniture de basilic frais font de ce plat un favori pour toute la famille.", "1 heure", 4, "https://images.pexels.com/photos/5864362/pexels-photo-5864362.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", 2 ),
            ('Poulet Rôti', 'Un délicieux poulet rôti doré à la perfection, parfait pour un repas familial.', '1 heure 50 minutes', 4, 'https://images.pexels.com/photos/5718015/pexels-photo-5718015.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', 2),
            ('Saumon Grillé avec Légumes', 'Un plat sain et délicieux, associant le saumon grillé à une variété de légumes colorés.', '35 minutes', 2, 'https://images.pexels.com/photos/3763847/pexels-photo-3763847.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', 2),
            ('Risotto aux Champignons', 'Un délicieux risotto crémeux avec une saveur riche de champignons sautés.', '35 minutes', 4, 'https://images.pexels.com/photos/5638527/pexels-photo-5638527.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', 2),
            ('Crumble aux Pommes', 'Un dessert délicieusement croustillant avec des pommes tendres et une couche de crumble parfumée à la cannelle.', '45 minutes', 6, 'https://images.pexels.com/photos/18403952/pexels-photo-18403952/free-photo-of-pain-nourriture-assiette-bois.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', 3),
            ('Cookies aux Pépites de Chocolat', 'Des cookies moelleux à l''intérieur et croustillants à l''extérieur, pleins de pépites de chocolat fondantes.', '25 minutes', 12, 'https://images.pexels.com/photos/2067424/pexels-photo-2067424.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', 3),
            ('Lasagnes Bolognaises', 'Un plat italien classique avec des couches de pâtes, une sauce bolognaise savoureuse, béchamel et fromage fondant.', '1 heure et 10 minutes', 6, 'https://images.pexels.com/photos/14696209/pexels-photo-14696209.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', 2),
            ('Salade de Quinoa aux Légumes Grillés', 'Cette salade fraîche et nourrissante associe du quinoa tendre avec des légumes grillés, offrant une explosion de saveurs et de textures. Parfait en entrée ou en plat principal pour un repas léger et équilibré.', '45 minutes', 4, 'https://ideogram.ai/api/images/direct/4uopSCDPSn6uILgSw_gIrQ.jpg', 1),
            ('Soupe aux champignons crémeuse', "Cette soupe aux champignons crémeuse est un régal réconfortant pour les jours frais. Des champignons de Paris frais sautés dans du beurre, mélangés à de l'oignon et de l'ail pour une saveur profonde.", '30 minutes', 4, 'https://ideogram.ai/api/images/direct/cE3H7_pTQXeHWHByfondWA.jpg', 1)`
      )
    );

    await database.query("delete from recipeIngredient");
    queries.push(
      database.query(
        `INSERT INTO recipeIngredient (quantity, unit, ingredient_id, recipe_id)
        VALUES 
          (400, 'Grammes', 1, 1),
          (200, 'Grammes', 2, 1),
          (4, '', 3, 1),
          (150, 'Grammes', 4, 1),
          (1, 'Cuillère à café', 5, 1),
          (1, 'Pincée', 6, 1),
          (400, 'Grammes', 1, 2),
          (500, 'Grammes', 7, 2),
          (1, 'Moyen', 8, 2),
          (3, 'Gousses', 9, 2),
          (2, 'moyennes rapées', 10, 2),
          (1, 'Branche', 11, 2),
          (800, 'Grammes', 12, 2),
          (2, 'Cuillères à soupe', 13, 2),
          (1, 'Tasse', 14, 2),
          (1, 'Tasse', 15, 2),
          (1, 'À convenance', 16, 2),
          (1, 'Pour garnir', 4, 2),
          (2, 'Cuillères à soupe', 17, 2),
          (1, 'Selon le goût', 6, 2),
          (1, 'Selon le goût', 5, 2),
          (1, 'Poulet entier', 18, 3),
          (1, 'Cuillère à soupe', 6, 3),
          (1, 'Cuillère à café', 5, 3),
          (1, 'Cuillère à café', 19, 3),
          (50, 'Grammes', 20, 3),
          (3, 'Gousses', 9, 3),
          (1, 'Brin', 21, 3),
          (1, '', 22, 3),
          (2, 'Filets', 23, 4),
          (1, '', 24, 4),
          (1, '', 25, 4),
          (1, 'Tasse', 26, 4),
          (2, 'Cuillères à soupe', 17, 4),
          (1, 'Jus', 22, 4),
          (2, 'Gousses hachées', 9, 4),
          (1, 'Cuillère à café', 27, 4),
          (1, 'Cuillère à café', 6, 4),
          (1, 'Cuillère à café', 5, 4),
          (1, 'Tasse', 28, 5),
          (250, 'Grammes (coupés en tranches)', 29, 5),
          (1, 'Oignon (finement haché)', 8, 5),
          (2, 'Gousses(hachées)', 9, 5),
          (1, 'Tasse', 30, 5),
          (4, 'Tasses', 31, 5),
          (1, 'Tasse', 4, 5),
          (2, 'Cuillères à soupe', 20, 5),
          (2, 'Cuillères à soupe', 17, 5),
          (1, 'Cuillère à café', 6, 5),
          (1, 'Cuillère à café', 5, 5),
          (2, 'Cuillères à soupe', 32, 5),
          (4, '', 33, 6),
          (1, 'Tasse', 34, 6),
          (1, 'Cuillère', 35, 6),
          (1, 'Cuillère à soupe', 22, 6),
          (1, 'Tasse', 36, 6),
          (1, 'Tasse', 34, 6),
          (1, 'Tasse', 37, 6),
          (1, 'Tasse', 20, 6),
          (1, 'Cuillère à café', 6, 6),
          (1, 'Tasse', 38, 6),
          (1, 'Tasse', 20, 7),
          (1, 'Tasse', 34, 7),
          (1, 'Tasse', 34, 7),
          (1, '', 3, 7),
          (1, 'Cuillère à café', 39, 7),
          (1, 'Tasse', 36, 7),
          (1, 'Cuillère à café', 40, 7),
          (1, 'Cuillère à café', 6, 7),
          (1, 'Tasse', 41, 7),
          (1, 'Tasse', 38, 7),
          (250, 'Grammes de Feuilles', 42, 8),
          (500, 'Grammes', 7, 8),
          (1, '(haché)', 8, 8),
          (3, 'Gousses (hachées)', 9, 8),
          (800, 'Grammes', 12, 8),
          (2, 'Cuillères à soupe', 13, 8),
          (1, 'Tasse', 14, 8),
          (1, 'Tasse', 15, 8),
          (1, 'Cuillère à café', 21, 8),
          (2, 'Feuilles', 43, 8),
          (1, 'Cuillère à café', 6, 8),
          (1, 'Cuillère à café', 5, 8),
          (50, 'Grammes', 20, 8),
          (50, 'Grammes', 36, 8),
          (500, 'ml', 44, 8),
          (1, 'Cuillère à café', 45, 8),
          (200, 'Grammes', 46, 8),
          (1, 'tasse', 28, 9),
          (2, 'tasses', 44, 9),
          (1, '', 24, 9),
          (1, '', 25, 9),
          (1, '', 67, 9),
          (1, 'poignée', 29, 9),
          (2, 'cuillères à soupe', 17, 9),
          (1, 'pincée', 5,9),
          (1, 'pincée', 6, 9),
          (1, 'ml', 22, 9),
          (1, 'bouquet', 32, 9),
          (500, 'gr', 42, 10),
          (1, '', 8, 10),
          (3, 'gousses', 9, 10),
          (2, 'cuillères à soupe', 20, 10),
          (2, 'cuillères à soupe', 35, 10),
          (1, 'litre', 44, 10),
          (200, 'ml', 46, 10),
          (1, 'pincée', 6, 10),
          (1, 'pincée', 5, 10),
          (1, 'bouquet', 33, 10)
        `
      )
    );

    await database.query("delete from role");
    queries.push(
      database.query(`INSERT INTO role (roleName) VALUES ('admin'), ('member')`)
    );

    await database.query("delete from instruction");
    queries.push(
      database.query(
        `INSERT INTO instruction (step, recipeStep_id)
            VALUES
            ('Faites cuire les spaghetti dans de l''eau bouillante salée selon les instructions sur l''emballage.', 1),
            ('Pendant ce temps, coupez le guanciale en petits morceaux et faites-le revenir dans une poêle jusqu''à ce qu''il soit croustillant.', 1),
            ('Dans un bol, battez les œufs et mélangez-les avec le parmesan râpé.', 1),
            ('Égouttez les pâtes cuites et ajoutez-les au guanciale dans la poêle, en mélangeant bien.', 1),
            ('Retirez la poêle du feu et ajoutez le mélange d''œufs et de parmesan, en remuant rapidement pour éviter la coagulation.', 1),
            ('Assaisonnez avec du poivre noir selon votre goût. Servez immédiatement.', 1),
            ('Dans une grande casserole, chauffer l''huile d''olive à feu moyen.', 2),
            ('Ajouter l''oignon, l''ail, le céleri et les carottes.', 2),
            ('Faire revenir jusqu''à ce que les légumes soient tendres.', 2),
            ('Ajouter la viande hachée et cuire jusqu''à ce qu''elle soit bien dorée.', 2),
            ('Verser le vin rouge et laisser mijoter jusqu''à réduction de moitié.', 2),
            ('Ajouter les tomates concassées, le concentré de tomate, le bouillon de bœuf, le sel et le poivre. Bien mélanger. Réduire le feu à doux, couvrir et laisser mijoter pendant au moins 30 minutes à 1 heure, en remuant de temps en temps.', 2),
            ('Pendant ce temps, faire cuire les spaghetti selon les instructions sur l''emballage.', 2),
            ('Retirer la sauce du feu. Servir la sauce bolognaise sur les spaghetti cuits, garnir de feuilles de basilic frais et de parmesan râpé.', 2),
            ('Préchauffez le four à 200°C. Rincez et séchez soigneusement le poulet.', 3),
            ('Assaisonnez l intérieur du poulet avec du sel et du poivre.', 3),
            ('Dans un bol, mélangez le beurre ramolli, l ail haché, le thym et le paprika.', 3),
            ('Étalez le mélange de beurre sur le poulet, en veillant à bien couvrir la peau.', 3),
            ('Saupoudrez le poulet avec un peu plus de sel, de poivre et de paprika.', 3),
            ('Placez des tranches de citron à l intérieur du poulet.', 3),
            ('Placez le poulet dans un plat allant au four et enfournez-le pendant 1 heure 30 minutes.', 3),
            ('Arrosez le poulet avec son jus de cuisson toutes les 30 minutes pour le garder juteux et doré.', 3),
            ('Vérifiez la cuisson en piquant le poulet avec une fourchette; les jus qui s écoulent doivent être clairs.', 3),
            ('Laissez reposer le poulet pendant quelques minutes avant de le découper.', 3),
            ('Servez le poulet rôti avec les tranches de citron et les jus de cuisson.', 3),
            ('Préchauffez le grill ou le four à 200°C.', 4),
            ('Dans un bol, mélangez l huile d''olive, le jus de citron, l''ail haché, les herbes de Provence, le sel et le poivre pour créer une marinade.', 4),
            ('Placez les filets de saumon dans un plat et versez la moitié de la marinade sur le saumon. Laissez mariner pendant 10 minutes.', 4),
            ('Pendant ce temps, préparez les légumes en les plaçant dans un autre plat. Versez le reste de la marinade sur les légumes et mélangez bien.', 4),
            ('Placez les filets de saumon et les légumes sur le grill ou dans le four. Faites cuire pendant environ 15-20 minutes ou jusqu''à ce que le saumon soit cuit et les légumes soient tendres.', 4),
            ('Servez le saumon grillé sur un lit de légumes et arrosez avec le jus de cuisson.', 4),
            ('Garnissez avec des quartiers de citron frais.', 4),
            ('Dans une poêle, faites chauffer l''huile d''olive.', 5),
            ('Ajoutez l''oignon et l''ail, faites-les revenir jusqu''à ce qu''ils soient translucides.', 5),
            ('Ajoutez les champignons et faites-les sauter jusqu''à ce qu''ils soient dorés. Réservez quelques champignons pour la garniture.', 5),
            ('Ajoutez le riz Arborio dans la poêle et mélangez bien pour enrober de matière grasse.', 5),
            ('Versez le vin blanc sec dans la poêle et remuez jusqu''à absorption.', 5),
            ('Commencez à ajouter le bouillon de légumes, une louche à la fois, en remuant fréquemment. Attendez que le liquide soit absorbé avant d''ajouter la suivante.', 5),
            ('Continuez jusqu''à ce que le riz soit cuit al dente et ait une consistance crémeuse (environ 18-20 minutes).', 5),
            ('Incorporez le beurre et le parmesan râpé. Assaisonnez avec du sel et du poivre selon votre goût.', 5),
            ('Servez le risotto aux champignons dans des assiettes, garnissez avec les champignons réservés et saupoudrez de persil frais haché.', 5),
            ('Préchauffez le four à 180°C.', 6),
            ('Dans un grand bol, mélangez les tranches de pommes avec le sucre, la cannelle et le jus de citron. Répartissez les pommes dans un plat de cuisson beurré.', 6),
            ('Dans un autre bol, mélangez la farine, le sucre brun, les flocons d''avoine, le beurre et le sel. Mélangez avec les doigts jusqu''à l''obtention d''une texture granuleuse.', 6),
            ('Si désiré, ajoutez les noix hachées au mélange de crumble.', 6),
            ('Saupoudrez le mélange de crumble sur les pommes dans le plat de cuisson, en veillant à couvrir uniformément.', 6),
            ('Faites cuire au four pendant environ 30 minutes ou jusqu''à ce que le dessus soit doré et que les pommes soient tendres.', 6),
            ('Laissez refroidir légèrement avant de servir. Vous pouvez accompagner le crumble d''une boule de glace à la vanille pour un délice supplémentaire.', 6),
            ('Préchauffez le four à 180°C.', 7),
            ('Dans un grand bol, battez le beurre ramolli, le sucre brun et le sucre blanc jusqu''à obtention d''un mélange crémeux.', 7),
            ('Ajoutez l''œuf et l''extrait de vanille, et mélangez bien.', 7),
            ('Dans un autre bol, mélangez la farine, la levure chimique et le sel. Ajoutez ce mélange sec à la préparation humide et mélangez jusqu''à obtenir une pâte homogène.', 7),
            ('Incorporez les pépites de chocolat (et les noix hachées si vous le souhaitez) à la pâte.', 7),
            ('Sur une plaque de cuisson recouverte de papier sulfurisé, déposez des cuillerées de pâte, en les espaçant pour permettre l''expansion pendant la cuisson.', 7),
            ('Faites cuire au four pendant environ 10 minutes ou jusqu''à ce que les bords des cookies soient légèrement dorés.', 7),
            ('Laissez refroidir les cookies sur la plaque pendant quelques minutes avant de les transférer sur une grille pour les laisser refroidir complètement.', 7),
            ('Préchauffez le four à 180°C.', 8),
            ('Dans une casserole, faites revenir l''oignon et l''ail dans un peu d''huile d''olive jusqu''à ce qu''ils soient tendres.', 8),
            ('Ajoutez la viande de bœuf hachée et faites-la cuire jusqu''à ce qu''elle soit bien dorée. Égouttez l''excès de graisse.', 8),
            ('Ajoutez les tomates concassées, le concentré de tomate, le vin rouge, le bouillon de bœuf, le thym, les feuilles de laurier, le sel et le poivre. Laissez mijoter pendant 20 minutes.', 8),
            ('Pendant ce temps, préparez la béchamel. Dans une casserole, faites fondre le beurre, ajoutez la farine et remuez pendant quelques minutes. Ajoutez le lait progressivement en remuant constamment jusqu''à ce que la sauce épaississe. Ajoutez la noix de muscade et retirez du feu.', 8),
            ('Dans un plat allant au four, alternez les couches de feuilles de lasagne, de sauce bolognaise et de béchamel. Répétez jusqu''à épuisement des ingrédients, en terminant par une couche de béchamel. Saupoudrez de fromage râpé sur le dessus.', 8),
            ('Faites cuire au four pendant environ 30-40 minutes, jusqu''à ce que le dessus soit doré et les lasagnes bien cuites.', 8),
            ('Laissez reposer quelques minutes avant de servir. Bon appétit !', 8),
            ('Dans une casserole, porter à ébullition le bouillon de légumes.', 9),
            ('Ajouter le quinoa dans la casserole avec le bouillon de légumes bouillant. Réduire le feu, couvrir et laisser mijoter pendant environ 15-20 minutes.',9),
            ("Pendant ce temps, préchauffer le gril. Dans un bol, mélanger les courgettes, poivron rouge, oignon rouge, champignons de Paris avec l'huile d'olive.", 9),
            ('Assaisonner avec du sel et du poivre.', 9),
            ("Placer les légumes marinés sur le gril chaud et faire griller pendant 8 à 10 minutes, en retournant occasionnellement, jusqu'à ce qu'ils soient tendres et légèrement dorés.",9),
            ('Une fois que le quinoa est cuit, le transférer dans un grand bol et laisser refroidir légèrement.',9),
            ('Ajouter les légumes grillés sur le quinoa refroidi. Arroser de jus de citron pour assaisonner.',9),
            ('Garnir de persil frais haché avant de servir.', 9),
            ('Servir la salade de quinoa aux légumes grillés comme une entrée légère et savoureuse.', 9),
            ('Dans une grande casserole, faites fondre le beurre à feu moyen.', 10),
            ("Ajoutez les oignons et l'ail, faites-les revenir jusqu'à ce qu'ils soient translucides.", 10),
            ("Ajoutez les champignons tranchés et faites-les sauter jusqu'à ce qu'ils soient dorés et que toute l'eau soit évaporée.", 10),
            ("Saupoudrez de farine sur les champignons et mélangez bien pour les enrober.", 10),
            ("Versez lentement le bouillon de légumes tout en remuant constamment pour éviter les grumeaux.", 10),
            ("Laissez mijoter la soupe pendant environ 15-20 minutes, jusqu'à ce qu'elle épaississe légèrement.", 10),
            ("Ajoutez la crème liquide et mélangez bien. Laissez mijoter pendant quelques minutes de plus.", 10),
            ("Assaisonnez avec du sel et du poivre selon votre goût.", 10),
            ("Servez la soupe aux champignons dans des bols chauds, garnissez de persil frais haché et dégustez !", 10)
            `
      )
    );

    // Optional: Truncate tables (remove existing data)
    // await database.query("truncate item");

    // Insert fake data into the 'item' table
    // for (let i = 0; i < 10; i += 1) {
    //   queries.push(
    //     database.query("insert into item(title) values (?)", [
    //       faker.lorem.word(),
    //     ])
    //   );
    // }

    /* ************************************************************************* */

    // Wait for all the insertion queries to complete
    await Promise.all(queries);

    // Close the database connection
    database.end();

    console.info(`${database.databaseName} filled from ${__filename} 🌱`);
  } catch (err) {
    console.error("Error filling the database:", err.message);
  }
};

// Run the seed function
seed();
