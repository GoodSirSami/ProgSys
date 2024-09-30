USE bprofs;
-- Requete 1
SELECT * FROM `tprofstge`;
-- Requete 2
SELECT * FROM `tprofstge` ORDER BY `Nom`;
-- Requete 3
SELECT * FROM `tprofstge` ORDER BY `Prenom`;
-- Requete 4
SELECT Nom, Courriel, Casier FROM `tprofstge` ORDER BY `Casier` DESC;
-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- --
-- Requete 5
SELECT Courriel FROM `tprofstge` WHERE `Local` LIKE 'P052%';
-- Requete 6
SELECT PosteTel FROM `tprofstge` WHERE `Coordinateur`= 1;
-- Requete 7
SELECT Nom, Prenom, Local FROM `tprofstge` WHERE `Casier` < 100;
-- Requete 8
SELECT Prenom, Nom FROM `tprofstge` WHERE `Casier` IS NULL;
-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- --
-- Requete 9
SELECT Nom, Prenom FROM `tprofstge` WHERE Prenom LIKE 'm%';
-- Requete 10
SELECT Courriel FROM `tprofstge` WHERE Nom LIKE '%y%';
-- Requete 11
SELECT Prenom FROM `tprofstge` WHERE Prenom LIKE '_i%';
-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- --
-- Requete 12
SELECT Nom, Local FROM `tprofstge` WHERE Local LIKE 'P052%' AND Nom != 'Marc';
-- Requete 13
SELECT Courriel FROM `tprofstge` WHERE Coordinateur = 1 OR Nom LIKE '%d%';
-- Requete 14
SELECT Casier FROM `tprofstge` WHERE ((Local NOT LIKE 'P052%' AND PosteTel = '2527') OR (Local LIKE 'P052%' AND Prenom LIKE 'm%'));