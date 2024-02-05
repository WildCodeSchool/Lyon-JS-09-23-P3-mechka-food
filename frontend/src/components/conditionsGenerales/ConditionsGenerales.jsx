import { useState } from "react";
import { Button } from "@mui/material";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

export default function ConditionsGenerales() {
  const [open, setOpen] = useState(false);
  const [scroll, setScroll] = useState("paper");

  const handleClickOpen = (scrollType) => () => {
    setOpen(true);
    setScroll(scrollType);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <section>
      <Button onClick={handleClickOpen("paper")}>
        J'accepte les conditions générales
      </Button>
      <Dialog open={open} onClose={handleClose} scroll={scroll}>
        <DialogTitle>
          Conditions Générales de Vente (CGV) - Mechka Food
        </DialogTitle>
        <DialogContent>
          <DialogContentText tabIndex={-1}>
            1- Objet
            <br />
            <br />
            Les présentes conditions générales de vente ont pour objet de
            définir les droits et obligations des parties dans le cadre de la
            vente en ligne de recettes de cuisine proposées sur le site Mechka
            Food. <br />
            <br />
            2- Prix <br /> <br />
            Les prix des recettes de cuisine sont indiqués en euros et sont
            susceptibles de varier. Mechka Food se réserve le droit de modifier
            ses prix à tout moment, mais les recettes seront facturées sur la
            base des tarifs en vigueur au moment de la validation de la
            commande. <br />
            <br /> 3- Commandes <br /> <br /> L'utilisateur peut passer commande
            en ligne sur le site. La validation de la commande implique
            l'acceptation pleine et entière des présentes CGV. Mechka Food
            confirmera la commande par courrier électronique. <br /> <br /> 4-
            Paiement <br />
            <br />
            Le règlement des recettes de cuisine s'effectue en ligne par
            [méthode de paiement]. La commande sera traitée à réception du
            paiement. <br />
            <br /> 5- Livraison <br /> <br /> Les recettes de cuisine seront
            accessibles en ligne après confirmation du paiement. Aucune
            livraison physique n'est prévue. <br />
            <br /> 6- Droit de Rétractation <br /> <br /> Conformément à la
            législation en vigueur, l'acheteur dispose d'un délai de [nombre de
            jours] jours à compter de la validation de la commande pour exercer
            son droit de rétractation. <br /> <br /> 7- Responsabilités <br />{" "}
            <br />
            Mechka Food ne saurait être tenu responsable des dommages directs ou
            indirects causés par l'utilisation des recettes de cuisine. <br />{" "}
            <br /> 8- Protection des Données Personnelles <br /> <br /> Les
            informations collectées lors de la commande sont nécessaires à la
            gestion de celle-ci. Mechka Food s'engage à protéger la vie privée
            de ses utilisateurs. <br />
            <br /> 9- Loi Applicable et Juridiction Compétente <br /> <br />
            Les présentes CGV sont soumises au droit français. Tout litige
            relatif à leur interprétation et à leur exécution relève de la
            compétence des tribunaux français.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Fermer</Button>
        </DialogActions>
      </Dialog>
    </section>
  );
}
