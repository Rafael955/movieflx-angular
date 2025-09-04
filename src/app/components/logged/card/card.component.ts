import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-card',
  imports: [
    CommonModule
  ],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
  @Input() title: string = '';
  @Input() description: string = '';
  @Input() duration?: string;
  @Input() ageRating?: string;
  @Input() approval?: string;
  @Input() top10: boolean = false;
  @Input() serviceLogo?: string;
  @Input() serviceName?: string;

  ageRatingSymbol: any = "bi bi-exclamation-triangle";
  approvalRatingColor: any = "text-white";

  ngOnInit(){
    this.defineAgeRatingSymbol();
    this.defineApprovalRatingColor();
  }

  defineAgeRatingSymbol() {
    if(this.ageRating === 'Livre' || this.ageRating === '0 anos'){
      this.ageRatingSymbol = "✅";
    } else if(this.ageRating === '12 anos' || this.ageRating === '14 anos'){
      this.ageRatingSymbol = "👍";
    } else if(this.ageRating === '16 anos' || this.ageRating === '+16') {
      this.ageRatingSymbol = "⚠️";
    } if(this.ageRating === '18 anos' || this.ageRating === '+18' || this.ageRating === 'Somente +18') {
      this.ageRatingSymbol = "🔞";
    }
  }

  defineApprovalRatingColor() {
    if(Number(this.approval) >= 75) {
          this.approvalRatingColor = "text-good-rating";
        }
        else if(Number(this.approval) >= 30 && Number(this.approval) < 75) {
          this.approvalRatingColor = "text-medium-rating";
        }
        else {
          this.approvalRatingColor = "text-low-rating";
        }

        this.approval += '% Aprovação';
  }
}

