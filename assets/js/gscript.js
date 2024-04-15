$(function(){
    function awardSlide(){
        this.loadTimer = null;
        this.step = 0;
        this.awardList = $('.slideList');
        this.awardListItem = null;
        this.start = function(autoPlay, speed){
            var self = this;
            $('.slideList li:last-child').clone().prependTo('.slideList');
            $('.slideList li:nth-child('+(this.awardList.find('li').length - 1)+')').clone().prependTo('.slideList');
            $('.slideList li:nth-child(3)').clone().appendTo('.slideList');
            $('.slideList li:nth-child(4)').clone().appendTo('.slideList');
            this.awardListItem = $('.slideList li').length;
            $('.slideList li:nth-child(2)').addClass('left');
            $('.slideList li:nth-child(3)').addClass('center');
            $('.slideList li:nth-child(4)').addClass('right');
            if(autoPlay === true && speed !== ''){
                self.loadTimer = setInterval(self.moveRight.bind(self), speed);
            }
        }
        this.moveLeft = function(){
            var awardListLength = this.awardListItem;
            if(this.step <= 0){
                this.step = awardListLength - 5;
                this.leftAnime();
                setTimeout(function(){
                    $('.slideList li').eq((awardListLength-4)).addClass('left');
                    $('.slideList li').eq((awardListLength-3)).addClass('center');
                    $('.slideList li').eq((awardListLength-2)).addClass('right');	 	 		
                }, 500);
            }else{
                this.step--;
                $('.slideList li').eq(this.step+1).addClass('left');
                $('.slideList li').eq((this.step+2)).removeClass('left').addClass('center');
                $('.slideList li').eq((this.step+3)).removeClass('center').addClass('right');
                $('.slideList li').eq((this.step+4)).removeClass('right');
            }
        }
        this.moveRight = function(){
            var awardListLength = this.awardListItem;
            if((this.step + 3) <  (awardListLength - 2)){
                $('.slideList li').eq(this.step+1).removeClass('left');
                $('.slideList li').eq((this.step+2)).addClass('left').removeClass('center');
                $('.slideList li').eq((this.step+3)).addClass('center').removeClass('right');
                $('.slideList li').eq((this.step+4)).addClass('right');
                this.step++;
            }else{
                this.step = 0;
                this.rightAnime();
                setTimeout(function(){
                    $('.slideList li:nth-child(2)').addClass('left');
                    $('.slideList li:nth-child(3)').addClass('center');
                    $('.slideList li:nth-child(4)').addClass('right');
                    $('.slideList li').eq((awardListLength-3)).removeClass('left');
                    $('.slideList li').eq((awardListLength-2)).removeClass('center');
                    $('.slideList li').eq((awardListLength-1)).removeClass('right');
                }, 500);
            }
        }
        this.rightAnime = function(){
            $('.slideList li').eq((this.awardListItem-4)).removeClass('left');
            $('.slideList li').eq((this.awardListItem-3)).addClass('left').removeClass('center');
            $('.slideList li').eq((this.awardListItem-2)).addClass('center').removeClass('right');
            $('.slideList li').eq((this.awardListItem - 1)).addClass('right');
        }
        this.leftAnime = function(){
            $('.slideList li').eq(0).addClass('left');
            $('.slideList li').eq(1).removeClass('left').addClass('center');
            $('.slideList li').eq(2).removeClass('center').addClass('right');
            $('.slideList li').eq(3).removeClass('right');
        }
    }

    var awardSl = new awardSlide();
    awardSl.start(true, 4000);

    $('.SlideBtn.right').click(function(e){
        e.preventDefault();
        awardSl.moveRight();
    });

    $('.SlideBtn.left').click(function(e){
        e.preventDefault();
        awardSl.moveLeft();
    });
});
