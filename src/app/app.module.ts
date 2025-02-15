import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http'; // Asegúrate de importar HttpClientModule

import { AppRoutingModule } from './app-routing-module';
import { CommonModule } from '@angular/common';

import { ChartModule } from 'primeng/chart';

//componentes de la aplicación
import { AppComponent } from './app.component';
import { ArrastrarComponent } from './pages/solicitante/arrastrar/arrastrar.component';
import { AuditoriaComponent } from './pages/solicitante/auditoria/auditoria.component';
import { CalendarioComponent } from './pages/asuntos-regulatorios/calendario/calendario.component';
import { ConfirmacionComponent } from './pages/solicitante/confirmacion/confirmacion.component';
import { CrearTramiteComponent } from './pages/solicitante/crear-tramite/crear-tramite.component';
import { EstadisticasComponent } from './pages/admin/estadisticas/estadisticas.component';
import { HistorialComponent } from './pages/solicitante/historial/historial.component';
import { InfoTramiteComponent } from './pages/solicitante/info-tramite/info-tramite.component';
import { LoginComponent } from './pages/shared/login/login.component';
import { ModificarInternacionalComponent } from './pages/solicitante/modificar-internacional/modificar-internacional.component';
import { ModificarNacionalComponent } from './pages/solicitante/modificar-nacional/modificar-nacional.component';
import { NotificacionesSolicitanteComponent } from './pages/solicitante/notificaciones-solicitante/notificaciones-solicitante.component';
import { RenovarComponent } from './pages/solicitante/renovar/renovar.component';
import { TablaTramiteComponent } from './pages/solicitante/tabla-tramite/tabla-tramite.component';
import { BarraOpcComponent } from './components/barra-opc/barra-opc.component';
import { HeaderComponent } from './components/shared/header/header.component';
import { LateralComponent } from './components/lateral/lateral.component';
import { CalendarModule } from 'primeng/calendar';
import { FormsModule } from '@angular/forms';
import { provideClientHydration } from '@angular/platform-browser';
import { provideAnimations } from '@angular/platform-browser/animations';
import { IgxDropDownModule } from 'igniteui-angular';
import { EstadisticasService } from './servicios/estadisticas.service';
import { SolicitudesComponent } from './pages/asuntos-regulatorios/solicitudes/solicitudes.component';
import { LateralArComponent } from './components/lateral-ar/lateral-ar.component';
import { LayoutComponent } from './components/shared/layout/layout.component';
import { SolicitanteLayoutComponent } from './components/solicitante/solicitante-layout/solicitante-layout.component';
import { SolicitanteSidebarComponent } from './components/solicitante/solicitante-sidebar/solicitante-sidebar.component';
import { SolicitanteHeaderComponent } from './components/solicitante/solicitante-header/solicitante-header.component';
import { ArSidebarComponent } from './components/asuntos-regulatorios/ar-sidebar/ar-sidebar.component';
import { ArHeaderComponent } from './components/asuntos-regulatorios/ar-header/ar-header.component';
import { ArLayoutComponent } from './components/asuntos-regulatorios/ar-layout/ar-layout.component';
import { AdminHeaderComponent } from './components/admin/admin-header/admin-header.component';
import { AdminLayoutComponent } from './components/admin/admin-layout/admin-layout.component';
import { AdminSidebarComponent } from './components/admin/admin-sidebar/admin-sidebar.component';
import { NotificationsComponent } from './pages/shared/notifications/notifications.component';
import { NotificacionesArComponent } from './pages/asuntos-regulatorios/notificaciones-ar/notificaciones-ar.component';
import { PerfilComponent } from './pages/shared/perfil/perfil.component';
import { FileSizeComponent } from './pages/solicitante/file-size/file-size.component';
import { provideHttpClient } from '@angular/common/http';


//PARA PRUEBAS DE ESTADISTICA
import { EstadisticaComponent } from './pages/admin/estadistica/estadistica.component';
import { AperturaTramiteComponent } from './pages/asuntos-regulatorios/apertura-tramite/apertura-tramite.component';
import { InfoSolicitudComponent } from './pages/asuntos-regulatorios/info-solicitud/info-solicitud.component';
import {InfoControlComponent} from "@/app/pages/asuntos-regulatorios/info-control/info-control.component";

@NgModule({
  declarations: [
    AppComponent,
    ArrastrarComponent,
    AuditoriaComponent,
    CalendarioComponent,
    ConfirmacionComponent,
    CrearTramiteComponent,
    EstadisticasComponent,
    HistorialComponent,
    InfoTramiteComponent,
    LoginComponent,
    ModificarInternacionalComponent,
    ModificarNacionalComponent,
    NotificacionesSolicitanteComponent,
    NotificacionesArComponent,
    RenovarComponent,
    TablaTramiteComponent,
    BarraOpcComponent,
    HeaderComponent,
    LateralComponent,
    SolicitudesComponent,
    LateralArComponent,
    PerfilComponent,
    EstadisticaComponent,  //ELIMINAR AL TERMINAR PRUEBAS ESTADISTICA
    LayoutComponent,
    SolicitanteLayoutComponent,
    SolicitanteSidebarComponent,
    SolicitanteHeaderComponent,
    ArSidebarComponent,
    ArHeaderComponent,
    ArLayoutComponent,
    AdminHeaderComponent,
    AdminLayoutComponent,
    AdminSidebarComponent,
    NotificationsComponent,
    AperturaTramiteComponent,
    FileSizeComponent,
    InfoSolicitudComponent,
    InfoControlComponent
  ],
  imports: [
    RouterModule,
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    CalendarModule,
    FormsModule,
    CommonModule,
    ChartModule,
    
  ],
  providers: [
    provideClientHydration(),
    provideAnimations(),
    provideHttpClient(),
    IgxDropDownModule,
    EstadisticasService,
  ],
  bootstrap: [AppComponent],
  exports: [
    ArLayoutComponent
  ]
})
export class AppModule {}
