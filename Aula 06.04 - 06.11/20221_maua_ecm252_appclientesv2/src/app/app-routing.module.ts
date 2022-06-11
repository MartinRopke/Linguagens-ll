import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ClienteInserirComponent } from "./clientes/cliente-inserir.component";
import { ClienteListaComponent } from "./clientes/cliente-lista/cliente-lista.component";

const routes: Routes = [
    { path: '', component: ClienteListaComponent },  //localhost:4200
    { path: 'criar', component: ClienteInserirComponent }, //localhost:4200/criar
    { path:'editar/:idCliente', component: ClienteInserirComponent } //localhost:4200/editar/12
]

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule{

}