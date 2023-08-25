import { Component } from '@angular/core';
import { ProviderControllerService } from 'src/app/api/services';
import { Provider } from 'src/app/api/models';

@Component({
  selector: 'app-providers',
  templateUrl: './providers.component.html',
  styleUrls: ['./providers.component.scss']
})
export class ProvidersComponent {

  providers: Provider[] = []; // Initialize the patients array

  constructor(private providerService: ProviderControllerService) { }

  ngOnInit(): void {
    this.getProviders(); // Call the getPatients method on initialization
  }

  getProviders(): void {
    this.providerService.find().subscribe(providers => this.providers = providers); // Subscribe to the service to get patients
  }
}
