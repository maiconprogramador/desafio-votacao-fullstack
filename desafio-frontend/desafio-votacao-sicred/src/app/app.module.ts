import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { PautasComponent } from './pages/pautas/pautas.component';
import { VotacaoComponent } from './pages/votacao/votacao.component';
import { ResultadoComponent } from './pages/resultado/resultado.component';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { SessaoListaComponent } from './components/sessao-lista/sessao-lista.component';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { SessaoDialogComponent } from './components/sessao-dialog/sessao-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatOptionModule } from '@angular/material/core';
import { HttpClientModule } from '@angular/common/http';
import { PautaListaComponent } from './components/pauta-lista/pauta-lista.component';
import { PautaDialogComponent } from './components/pauta-dialog/pauta-dialog.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PautasComponent,
    VotacaoComponent,
    ResultadoComponent,
    SessaoListaComponent,
    SessaoDialogComponent,
    PautaListaComponent,
    PautaDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCardModule,
    MatTableModule,
    MatIconModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatOptionModule,
    MatSelectModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
