SET FOREIGN_KEY_CHECKS = 0;

DROP DATABASE IF EXISTS mechka;
CREATE DATABASE mechka;

DROP TABLE IF EXISTS recipe;
CREATE TABLE recipe (
  id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
  title VARCHAR(50) NOT NULL,
  descriptions VARCHAR(255) NOT NULL,
  instructions TEXT NOT NULL,
  global_time VARCHAR(50) NOT NULL,
  number_persons INT NOT NULL,
  image_url VARCHAR(255) NOT NULL
);

DROP TABLE IF EXISTS ingredient;
CREATE TABLE ingredient (
  id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
  name VARCHAR(50) NOT NULL
);

DROP TABLE IF EXISTS recipe_ingredient;
CREATE TABLE recipe_ingredient (
  id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
  quantity VARCHAR(50),
  ingredient_id INT,
  recipe_id INT,
  CONSTRAINT ingredient_id FOREIGN KEY (ingredient_id) REFERENCES ingredient(id),
  CONSTRAINT recipe_id FOREIGN KEY (recipe_id) REFERENCES recipe(id)
);

INSERT INTO recipe (title, descriptions, instructions, global_time, number_persons, image_url)
VALUES
  ('Pâtes à la Carbonara', "Une délicieuse recette de pâtes à la carbonara.", "1.Faites cuire les spaghetti dans de l'eau bouillante salée selon les instructions sur l'emballage. 2. Pendant ce temps, coupez le guanciale en petits morceaux et faites-le revenir dans une poêle jusqu'à ce qu'il soit croustillant. 3. Dans un bol, battez les œufs et mélangez-les avec le parmesan râpé. 4. Égouttez les pâtes cuites et ajoutez-les au guanciale dans la poêle, en mélangeant bien. 5. Retirez la poêle du feu et ajoutez le mélange d'œufs et de parmesan, en remuant rapidement pour éviter la coagulation. 6. Assaisonnez avec du poivre noir selon votre goût. Servez immédiatement.", "30 minutes", 4, "https://recette.supertoinette.com/154040/b/pates-a-la-carbonara.jpg"),
  ('Spaghetti Bolognaise', "Découvrez l'authenticité de la cuisine italienne avec cette recette classique de spaghetti bolognaise. Une sauce riche, des pâtes al dente et une garniture de basilic frais font de ce plat un favori pour toute la famille.", "1. Dans une grande casserole, chauffer l'huile d'olive à feu moyen. 2. Ajouter l'oignon, l'ail, le céleri et les carottes. 3. Faire revenir jusqu'à ce que les légumes soient tendres. 4. Ajouter la viande hachée et cuire jusqu'à ce qu'elle soit bien dorée. 5. Verser le vin rouge et laisser mijoter jusqu'à réduction de moitié. 6. Ajouter les tomates concassées, le concentré de tomate, le bouillon de bœuf, le sel et le poivre. Bien mélanger. Réduire le feu à doux, couvrir et laisser mijoter pendant au moins 30 minutes à 1 heure, en remuant de temps en temps. 7. Pendant ce temps, faire cuire les spaghetti selon les instructions sur l'emballage. 8.Retirer la sauce du feu. Servir la sauce bolognaise sur les spaghetti cuits, garnir de feuilles de basilic frais et de parmesan râpé.", "1 heure", 4, "https://odelices.ouest-france.fr/images/recettes/spaghetti_a_la_sauce_bolognaise.jpg");

  INSERT INTO ingredient (name) 
VALUES 
    ('Pâtes'),
    ('Lardons fumés'),
    ('Œufs'),
    ('Parmesan râpé'),
    ('Poivre noir'),
    ('Sel'),
    ('Pâtes'),
    ('Viande hachée'),
    ('Oignon'),
    ('Ail'),
    ('Carottes'),
    ('Céleri'),
    ('Tomates concassées en conserve'),
    ('Concentré de tomate'),
    ('Vin rouge'),
    ('Bouillon de bœuf'),
    ('Feuilles de basilic frais'),
    ('Parmesan râpé'),
    ('Huile Olive'),
    ('Sel'),
    ('Poive noir');

INSERT INTO Recipe_Ingredient (quantity, ingredient_id, recipe_id)
VALUES 
	('400 grammes', 1, 1),
    ('200 grammes', 2, 1),
    ('4', 3, 1),
    ('150 grammes', 4, 1),
    ('1/2 cuillère à café', 5, 1),
    ('Sel selon le goût', 6, 1),
    ('400 grammes', 7, 2),
    ('500 grammes', 8, 2),
    ('1 moyen', 9, 2),
    ('3 gousses', 10, 2),
    ('2 moyennes rapées', 11, 2),
    ('1 branche', 12, 2),
    ('800 grammes', 13, 2), 
    ('2 cuillères à soupe', 14, 2),
    ('1 tasse', 15, 2),
    ('1 tasse', 16, 2),
    ('À convenance', 17, 2),
    ('Pour garnir', 18, 2),
    ('2 cuillères à soupe', 19, 2),
    ('Selon le goût', 20, 2),
    ('Selon le goût', 21, 2);


SET FOREIGN_KEY_CHECKS = 1;